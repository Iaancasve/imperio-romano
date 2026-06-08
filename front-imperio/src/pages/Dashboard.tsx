import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { ProvinciaCard } from '../components/ProvinciaCard';

export const Dashboard = () => {
  const [provincias, setProvincias] = useState<any[]>([]);
  const { user, logout } = useAuth(); // Importamos logout del contexto

  useEffect(() => {
    dataService.getProvincias()
      .then(setProvincias)
      .catch((err) => console.error("Error al cargar provincias:", err));
  }, []);

  const handleRecaudar = async (provinciaId: number) => {
    try {
      await dataService.recaudarImpuestos(provinciaId);
      alert('Recaudación completada con éxito.');
    } catch (error) {
      alert('Error: No tienes permiso para realizar esta acción.');
      console.error(error);
    }
  };

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      {/* Header con el botón de Logout */}
      <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
        <h1 className="text-4xl font-serif text-stone-100 uppercase">
          Panel de Control Imperial
        </h1>
        <button 
          onClick={logout}
          className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded transition font-serif"
        >
          Cerrar Sesión
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {provincias.map((p: any) => {
          const puedeRecaudar = user?.role === 'Senado' || p.gobernador?.id === user?.id;

          return (
            <div key={p.id} className="flex flex-col">
              <ProvinciaCard provincia={p} />
              
              {puedeRecaudar && (
                <button 
                  onClick={() => handleRecaudar(p.id)}
                  className="w-full bg-green-800 hover:bg-green-700 text-white py-2 mt-2 rounded transition font-bold"
                >
                  Recaudar Impuestos
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};