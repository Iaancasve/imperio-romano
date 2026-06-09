import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { ProvinciaCard } from '../components/ProvinciaCard';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client'; // Importante: Asegúrate de tener instalado socket.io-client

// Conexión centralizada al Gateway definido en tu proyecto
const socket = io('http://localhost:3000'); 

export const Dashboard = () => {
    const [provincias, setProvincias] = useState<any[]>([]);
    const [informe, setInforme] = useState<any>(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dataService.getProvincias()
            .then(setProvincias)
            .catch((err) => console.error("Error al cargar provincias:", err));

        // Metodología de escucha según el Gateway de tu profesor
        socket.on('notificacion', (data) => {
            // Esto se ejecuta cuando el Gateway emite un mensaje a todos
            setInforme(data); 
        });

        return () => {
            socket.off('notificacion');
        };
    }, []);

    const handleRecaudar = async (provinciaId: number) => {
        try {
            const resultado = await dataService.recaudarImpuestos(provinciaId);
            setInforme({ tipo: 'recaudacion', data: resultado });
        } catch (error) {
            console.error("Error al realizar la acción:", error);
        }
    };

    const handleSimularRebelion = async (provinciaId: number) => {
        try {
            const resultado = await dataService.simularRebelion(provinciaId);
            setInforme({ tipo: 'rebelion', data: resultado });
        } catch (error) {
            console.error("Error al simular rebelión:", error);
        }
    };

    return (
        <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
            <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
                <h1 className="text-4xl font-serif text-stone-100 uppercase">Panel de Control Imperial</h1>
                <div className="flex gap-4">
                    {user?.role === 'Senado' && (
                        <>
                            <button onClick={() => navigate('/admin-provincias')} className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-2 rounded transition font-serif">Gestionar Provincias</button>
                            <button onClick={() => navigate('/admin-usuarios')} className="bg-stone-700 hover:bg-stone-600 text-white px-6 py-2 rounded transition font-serif">Gestionar Usuarios</button>
                        </>
                    )}
                    <button onClick={() => logout(navigate)} className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded transition">Cerrar Sesión</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provincias.map((p: any) => {
                    const puedeAccion = user?.role === 'Senado' || p.gobernador?.id === user?.id;
                    return (
                        <div key={p.id} className="flex flex-col">
                            <ProvinciaCard provincia={p} />
                            {puedeAccion && (
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleRecaudar(p.id)} className="flex-1 bg-green-800 hover:bg-green-700 text-white py-2 rounded transition font-bold">Recaudar</button>
                                    {user?.role === 'Senado' && (
                                        <button onClick={() => handleSimularRebelion(p.id)} className="flex-1 bg-red-800 hover:bg-red-700 text-white py-2 rounded transition font-bold">Rebelión</button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Modal Único para Informes */}
            {informe && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
                    <div className="bg-stone-900 p-8 rounded-2xl border border-amber-600 max-w-sm w-full shadow-2xl">
                        {informe.tipo === 'recaudacion' ? (
                            <>
                                <h2 className="text-xl font-serif text-amber-500 mb-4 uppercase">Informe de Recaudación</h2>
                                <div className="text-stone-300 space-y-2">
                                    <p>Provincia: <span className="text-white font-bold">{informe.data.provincia}</span></p>
                                    <p>Gobernador: <span className="text-white font-bold">{informe.data.gobernador}</span></p>
                                    <p className="text-green-400 font-bold">Total: {informe.data.recaudacionFinal}</p>
                                    <p className="text-xs text-stone-500">Fecha: {new Date(informe.data.fecha).toLocaleString()}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className={`text-xl font-serif mb-4 uppercase ${informe.data.rebelion ? 'text-red-500' : 'text-green-500'}`}>
                                    {informe.data.rebelion ? '¡Informe de Rebelión!' : 'Informe de Estabilidad'}
                                </h2>
                                <div className="text-stone-300 space-y-2">
                                    <p>Provincia: <span className="text-white font-bold">{informe.data.provincia}</span></p>
                                    <p>Gobernador: <span className="text-white font-bold">{informe.data.gobernador}</span></p>
                                    {!informe.data.rebelion ? (
                                        <p className="text-green-400 font-bold py-4">El pueblo está tranquilo.</p>
                                    ) : (
                                        <>
                                            <p>Nivel Riesgo: <span className="text-red-400 font-bold">{informe.data.nivelRiesgo}</span></p>
                                            <p>Estado: <span className="text-red-500 font-bold">{informe.data.estado}</span></p>
                                            <p>Bajas: <span className="text-red-600 font-bold">{informe.data.bajas}</span></p>
                                        </>
                                    )}
                                    <p className="text-xs text-stone-500">Fecha: {new Date(informe.data.fecha).toLocaleString()}</p>
                                </div>
                            </>
                        )}
                        <button onClick={() => setInforme(null)} className="w-full mt-6 bg-amber-800 py-2 rounded text-white hover:bg-amber-700 transition">Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    );
};