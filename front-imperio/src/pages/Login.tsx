import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Llamada al backend
      const { data } = await api.post('/auth/login', { email, password });
      
      // Guardamos el token en el contexto
      login(data.access_token);
      
      // Redirigimos al Dashboard
      navigate('/dashboard');
    } catch (error) {
      alert('Error al iniciar sesión: Credenciales incorrectas');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-stone-900 text-stone-100">
      <form onSubmit={handleLogin} className="w-full max-w-sm rounded bg-stone-800 p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold uppercase">Acceso al Senado</h2>
        <input 
          type="email" placeholder="Email" className="mb-4 w-full rounded bg-stone-700 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Contraseña" className="mb-6 w-full rounded bg-stone-700 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full rounded bg-amber-700 py-2 font-bold hover:bg-amber-600">
          ENTRAR
        </button>
      </form>
    </div>
  );
};