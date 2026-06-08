import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { ProvinciaCard } from '../components/ProvinciaCard';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

export const Dashboard = () => {
  const [provincias, setProvincias] = useState<any[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // Hook para navegar

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
    }
  };

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
        <h1 className="text-4xl font-serif text-stone-100 uppercase">
          Panel de Control Imperial
        </h1>
        
        <div className="flex gap-4">
          {/* Botón exclusivo para el Senado */}
          {user?.role === 'Senado' && (
            <button 
              onClick={() => navigate('/admin-provincias')}
              className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-2 rounded transition font-serif"
            >
              Gestionar Provincias
            </button>
          )}
          
          <button 
            onClick={logout}
            className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded transition font-serif"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
      
      {/* Contenido */}
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