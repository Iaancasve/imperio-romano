import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiClient } from '../api/cliente';

export const Login = () => {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const data = await apiClient('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        nombre: nombre,       // Coincide con body.nombre
        contrasena: contrasena  // Coincide con body.contrasena
      }),
    });
    
    // Si llegamos aquí, es que el backend respondió con el token
    login(data.access_token);
  } catch (err) {
    console.error(err);
    alert('Error al iniciar sesión: Revisa tus credenciales');
  }
};

  return (
    <form onSubmit={handleLogin} className="p-10">
      <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="password" onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
};