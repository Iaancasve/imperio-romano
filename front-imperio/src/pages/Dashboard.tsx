import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { ProvinciaCard } from '../components/ProvinciaCard';

export const Dashboard = () => {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    dataService.getProvincias().then(setProvincias);
  }, []);

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      <h1 className="text-4xl font-serif text-stone-100 mb-8 uppercase border-b border-stone-800 pb-4">
        Administración de Provincias
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {provincias.map((p: any) => (
          <ProvinciaCard key={p.id} provincia={p} />
        ))}
      </div>
    </div>
  );
};