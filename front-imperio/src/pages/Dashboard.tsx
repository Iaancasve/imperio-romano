import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { ProvinciaCard } from '../components/ProvinciaCard';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const [provincias, setProvincias] = useState<any[]>([]);
    const [informe, setInforme] = useState<any>(null); // Añadido estado
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dataService.getProvincias()
            .then(setProvincias)
            .catch((err) => console.error("Error al cargar provincias:", err));
    }, []);

    const handleRecaudar = async (provinciaId: number) => {
        try {
            const resultado = await dataService.recaudarImpuestos(provinciaId);
            setInforme(resultado); // Actualiza el estado, lo que abre el modal
        } catch (error) {
            console.error("Error al realizar la acción:", error);
        }
    };

    return (
        <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
            <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
                <h1 className="text-4xl font-serif text-stone-100 uppercase">Panel de Control Imperial</h1>
                <div className="flex gap-4">
                    {user?.role === 'Senado' && (
                        <button onClick={() => navigate('/admin-provincias')} className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-2 rounded transition font-serif">
                            Gestionar Provincias
                        </button>
                    )}
                    <button onClick={() => logout(navigate)} className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded transition">
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provincias.map((p: any) => {
                    const puedeRecaudar = user?.role === 'Senado' || p.gobernador?.id === user?.id;
                    return (
                        <div key={p.id} className="flex flex-col">
                            <ProvinciaCard provincia={p} />
                            {puedeRecaudar && (
                                <button onClick={() => handleRecaudar(p.id)} className="w-full bg-green-800 hover:bg-green-700 text-white py-2 mt-2 rounded transition font-bold">
                                    Recaudar Impuestos
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Modal de Informe */}
            {informe && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
                    <div className="bg-stone-900 p-8 rounded-2xl border border-amber-600 max-w-sm w-full shadow-2xl">
                        <h2 className="text-xl font-serif text-amber-500 mb-4">Informe de Recaudación</h2>
                        <div className="text-stone-300 space-y-2">
                            <p>Provincia: <span className="text-white font-bold">{informe.provincia}</span></p>
                            <p>Gobernador: <span className="text-white font-bold">{informe.gobernador}</span></p>
                            <p className="text-green-400 font-bold">Total: {informe.recaudacionFinal}</p>
                            <p className="text-xs text-stone-500">Fecha: {new Date(informe.fecha).toLocaleString()}</p>
                        </div>
                        <button onClick={() => setInforme(null)} className="w-full mt-6 bg-amber-800 py-2 rounded text-white hover:bg-amber-700 transition">
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};