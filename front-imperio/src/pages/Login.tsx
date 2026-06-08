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
    const response = await apiClient('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ nombre, contrasena: contrasena }),
    });

    // Ahora la respuesta trae { access_token, user }
    const { access_token, user } = response; 

    // Ya coincide con los 2 argumentos que espera tu AuthContext
    login(access_token, user); 
    
  } catch (err) {
    alert('Credenciales inválidas');
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