import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [username, setUsername] = useState(''); // Cambiamos email por username
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    console.log("Enviando credenciales:", { username, password }); // Veremos qué enviamos
    const { data } = await api.post('/auth/login', { username, password });
    console.log("Respuesta del servidor:", data); // Veremos qué responde el servidor
    
    login(data.access_token);
    navigate('/dashboard');
  } catch (error: any) {
    console.error("Error completo:", error.response?.data || error.message);
    alert('Error al iniciar sesión: Mira la consola (F12)');
  }
};

  return (
    <div className="flex h-screen items-center justify-center bg-stone-900 text-stone-100">
      <form onSubmit={handleLogin} className="w-full max-w-sm rounded bg-stone-800 p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold uppercase">Acceso al Senado</h2>
        <input 
          type="text" // Cambiado a 'text' para el nombre de usuario
          placeholder="Nombre de usuario" 
          className="mb-4 w-full rounded bg-stone-700 p-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="mb-6 w-full rounded bg-stone-700 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full rounded bg-amber-700 py-2 font-bold hover:bg-amber-600">
          ENTRAR
        </button>
      </form>
    </div>
  );
};