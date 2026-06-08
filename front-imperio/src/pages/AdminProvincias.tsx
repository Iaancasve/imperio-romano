import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { X, Plus, Trash2, Edit2 } from 'lucide-react';

export const AdminProvincias = () => {
  const [provincias, setProvincias] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ 
    nombre: '', lealtad: 0, prosperidadEconomica: 0, 
    impuestos: 0, conflictosInternos: 0, riesgoRebelion: 0 
  });

  useEffect(() => { loadProvincias(); }, []);

  const loadProvincias = () => dataService.getProvincias().then(setProvincias);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await dataService.createProvincia(formData);
    loadProvincias();
    setShowModal(false);
  };

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif text-amber-500">Panel Imperial: Provincias</h1>
        <button onClick={() => setShowModal(true)} className="bg-amber-800 hover:bg-amber-700 px-6 py-2 rounded flex items-center gap-2">
          <Plus size={20}/> Registrar Provincia
        </button>
      </div>

      <div className="bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-800">
        <table className="w-full text-left">
          <thead className="bg-stone-800 uppercase text-xs text-stone-400">
            <tr>
              <th className="p-4">Nombre</th>
              <th className="p-4">Lealtad</th>
              <th className="p-4">Prosperidad</th>
              <th className="p-4">Impuestos</th>
              <th className="p-4">Conflictos</th>
              <th className="p-4">Riesgo</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {provincias.map((p) => (
              <tr key={p.id} className="hover:bg-stone-800/30 transition">
                <td className="p-4 font-bold text-amber-100">{p.nombre}</td>
                <td className="p-4">{p.lealtad}%</td>
                <td className="p-4">{p.prosperidadEconomica}</td>
                <td className="p-4">{p.impuestos}</td>
                <td className="p-4">{p.conflictosInternos}</td>
                <td className="p-4">{p.riesgoRebelion}%</td>
                <td className="p-4 flex justify-center gap-4">
                  <button className="text-blue-400 hover:text-blue-300"><Edit2 size={18}/></button>
                  <button onClick={() => dataService.deleteProvincia(p.id).then(loadProvincias)} className="text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <form onSubmit={handleCreate} className="bg-stone-900 p-8 rounded-2xl w-full max-w-lg border border-stone-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif">Nueva Provincia</h2>
              <button type="button" onClick={() => setShowModal(false)}><X /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input className="col-span-2 p-3 bg-stone-800 rounded border border-stone-700" placeholder="Nombre" onChange={e => setFormData({...formData, nombre: e.target.value})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Lealtad" onChange={e => setFormData({...formData, lealtad: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Prosperidad" onChange={e => setFormData({...formData, prosperidadEconomica: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Impuestos" onChange={e => setFormData({...formData, impuestos: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Conflictos" onChange={e => setFormData({...formData, conflictosInternos: Number(e.target.value)})} />
              <input type="number" className="col-span-2 p-3 bg-stone-800 rounded border border-stone-700" placeholder="Riesgo Rebelión" onChange={e => setFormData({...formData, riesgoRebelion: Number(e.target.value)})} />
            </div>
            <button className="w-full mt-6 bg-amber-700 hover:bg-amber-600 py-3 rounded-lg font-bold transition">Confirmar Registro</button>
          </form>
        </div>
      )}
    </div>
  );
};