import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Trash2, Edit2, LogOut, ArrowLeft, Coins } from 'lucide-react';

export const AdminProvincias = () => {
  const [provincias, setProvincias] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [informe, setInforme] = useState<any>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ 
    nombre: '', lealtad: 0, prosperidadEconomica: 0, 
    impuestos: 0, conflictosInternos: 0, riesgoRebelion: 0 
  });

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { loadProvincias(); }, []);

  const loadProvincias = () => dataService.getProvincias().then(setProvincias);

  const handleOpenCreate = () => {
    setFormData({ nombre: '', lealtad: 0, prosperidadEconomica: 0, impuestos: 0, conflictosInternos: 0, riesgoRebelion: 0 });
    setEditingId(null);
    setShowModal(true);
  };

  const handleOpenEdit = (p: any) => {
    setFormData(p);
    setEditingId(p.id);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await dataService.updateProvincia(editingId, formData);
    } else {
      await dataService.createProvincia(formData);
    }
    loadProvincias();
    setShowModal(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Eliminar esta provincia?')) {
      await dataService.deleteProvincia(id);
      loadProvincias();
    }
  };

  const handleRecaudar = async (id: number) => {
    try {
      const data = await dataService.recaudarImpuestos(id);
      setInforme(data);
      loadProvincias();
    } catch (error) {
      console.error("Error al recaudar:", error);
    }
  };

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-6">
        <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-stone-400 hover:text-white transition">
          <ArrowLeft size={20}/> Volver al Dashboard
        </button>
        <h1 className="text-3xl font-serif text-amber-500 uppercase tracking-widest">Panel Imperial</h1>
        <button onClick={() => logout(navigate)} className="flex items-center gap-2 bg-red-900 hover:bg-red-800 px-4 py-2 rounded transition">
          Cerrar Sesión <LogOut size={18}/>
        </button>
      </div>

      <div className="flex justify-end mb-6">
        <button onClick={handleOpenCreate} className="bg-amber-800 hover:bg-amber-700 px-6 py-2 rounded flex items-center gap-2">
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
                  <button onClick={() => handleRecaudar(p.id)} className="text-emerald-500 hover:text-emerald-300" title="Recaudar Impuestos"><Coins size={18}/></button>
                  <button onClick={() => handleOpenEdit(p)} className="text-blue-400 hover:text-blue-300"><Edit2 size={18}/></button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <form onSubmit={handleSave} className="bg-stone-900 p-8 rounded-2xl w-full max-w-lg border border-stone-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif">{editingId ? 'Editar Provincia' : 'Nueva Provincia'}</h2>
              <button type="button" onClick={() => setShowModal(false)}><X /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input className="col-span-2 p-3 bg-stone-800 rounded border border-stone-700" placeholder="Nombre" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Lealtad" value={formData.lealtad} onChange={e => setFormData({...formData, lealtad: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Prosperidad" value={formData.prosperidadEconomica} onChange={e => setFormData({...formData, prosperidadEconomica: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Impuestos" value={formData.impuestos} onChange={e => setFormData({...formData, impuestos: Number(e.target.value)})} />
              <input type="number" className="p-3 bg-stone-800 rounded border border-stone-700" placeholder="Conflictos" value={formData.conflictosInternos} onChange={e => setFormData({...formData, conflictosInternos: Number(e.target.value)})} />
              <input type="number" className="col-span-2 p-3 bg-stone-800 rounded border border-stone-700" placeholder="Riesgo Rebelión" value={formData.riesgoRebelion} onChange={e => setFormData({...formData, riesgoRebelion: Number(e.target.value)})} />
            </div>
            <button type="submit" className="w-full mt-6 bg-amber-700 hover:bg-amber-600 py-3 rounded-lg font-bold transition">
              {editingId ? 'Guardar Cambios' : 'Confirmar Registro'}
            </button>
          </form>
        </div>
      )}

      {informe !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
          <div className="bg-stone-900 p-8 rounded-2xl border border-amber-600 max-w-sm w-full shadow-2xl">
            <h2 className="text-xl font-serif text-amber-500 mb-4">Informe de Recaudación</h2>
            <div className="text-stone-300 space-y-2">
              <p>Provincia: <span className="text-white font-bold">{informe.provincia}</span></p>
              <p>Gobernador: <span className="text-white font-bold">{informe.gobernador}</span></p>
              <p className="text-green-400 font-bold">Total: {informe.recaudacionFinal}</p>
              <p className="text-xs text-stone-500">Fecha: {new Date(informe.fecha).toLocaleString()}</p>
            </div>
            <button 
              onClick={() => setInforme(null)} 
              className="w-full mt-6 bg-amber-800 py-2 rounded text-white hover:bg-amber-700 transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};