import { useEffect, useState } from 'react';
import { dataService } from '../api/dataService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Trash2, Edit2, LogOut, ArrowLeft } from 'lucide-react';

export const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ 
    nombre: '', contrasena: '', rolId: 1 
  });

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { loadUsuarios(); }, []);

  const loadUsuarios = () => dataService.getUsuarios().then(setUsuarios);

  const handleOpenCreate = () => {
    setFormData({ nombre: '', contrasena: '', rolId: 1 });
    setEditingId(null);
    setShowModal(true);
  };

  const handleOpenEdit = (u: any) => {
    // Extraemos el rolId correctamente de la relación
    const rolId = u.rolesAsignados?.[0]?.rolId || 1;
    setFormData({ nombre: u.nombre, contrasena: '', rolId: rolId });
    setEditingId(u.id);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar objeto de envío (limpiando contraseña si está vacía en edición)
    const payload: any = { 
        nombre: formData.nombre, 
        rolId: Number(formData.rolId) 
    };
    
    if (formData.contrasena.trim() !== '') {
        payload.contrasena = formData.contrasena;
    }
    
    try {
        if (editingId) {
            await dataService.updateUsuario(editingId, payload);
        } else {
            await dataService.createUsuario(payload);
        }
        loadUsuarios();
        setShowModal(false);
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("Error al guardar los cambios.");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Eliminar este usuario?')) {
      await dataService.deleteUsuario(id);
      loadUsuarios();
    }
  };

  return (
    <div className="p-10 bg-stone-950 min-h-screen text-stone-200">
      <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-6">
        <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-stone-400 hover:text-white transition">
          <ArrowLeft size={20}/> Volver al Dashboard
        </button>
        <h1 className="text-3xl font-serif text-amber-500 uppercase tracking-widest">Gestión de Usuarios</h1>
        <button onClick={() => logout(navigate)} className="flex items-center gap-2 bg-red-900 hover:bg-red-800 px-4 py-2 rounded transition">
          Cerrar Sesión <LogOut size={18}/>
        </button>
      </div>

      <div className="flex justify-end mb-6">
        <button onClick={handleOpenCreate} className="bg-amber-800 hover:bg-amber-700 px-6 py-2 rounded flex items-center gap-2">
          <Plus size={20}/> Registrar Usuario
        </button>
      </div>

      <div className="bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-800">
        <table className="w-full text-left">
          <thead className="bg-stone-800 uppercase text-xs text-stone-400">
            <tr>
              <th className="p-4">Nombre</th>
              <th className="p-4">Rol</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {usuarios.map((u) => (
              <tr key={u.id} className="hover:bg-stone-800/30 transition">
                <td className="p-4 font-bold text-amber-100">{u.nombre}</td>
                <td className="p-4">{u.rolesAsignados?.[0]?.rol?.descripcion || 'Sin rol'}</td>
                <td className="p-4 flex justify-center gap-4">
                  <button onClick={() => handleOpenEdit(u)} className="text-blue-400 hover:text-blue-300"><Edit2 size={18}/></button>
                  <button onClick={() => handleDelete(u.id)} className="text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
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
              <h2 className="text-2xl font-serif">{editingId ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
              <button type="button" onClick={() => setShowModal(false)}><X /></button>
            </div>
            <div className="space-y-4">
              <input className="w-full p-3 bg-stone-800 rounded border border-stone-700" placeholder="Nombre" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} required />
              <input type="password" className="w-full p-3 bg-stone-800 rounded border border-stone-700" placeholder="Contraseña" value={formData.contrasena} onChange={e => setFormData({...formData, contrasena: e.target.value})} />
              <select className="w-full p-3 bg-stone-800 rounded border border-stone-700" value={formData.rolId} onChange={e => setFormData({...formData, rolId: Number(e.target.value)})}>
                <option value={1}>Senado</option>
                <option value={2}>Gobernador</option>
              </select>
            </div>
            <button type="submit" className="w-full mt-6 bg-amber-700 hover:bg-amber-600 py-3 rounded-lg font-bold transition">
              {editingId ? 'Guardar Cambios' : 'Confirmar Registro'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};