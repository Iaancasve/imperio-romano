// front-imperio/src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { useAuth } from './context/AuthContext';
import type { JSX } from 'react/jsx-runtime';

// Un componente simple para proteger las rutas
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Si ya tiene token, lo enviamos al dashboard, sino al login */}
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />

        {/* Ruta Protegida: Solo visible si hay token */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <div className="p-10 text-white bg-stone-900 min-h-screen">
                <h1 className="text-3xl font-bold">Bienvenido al Senado</h1>
                <p>Aquí gestionarás las provincias del Imperio.</p>
              </div>
            </PrivateRoute>
          } 
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;