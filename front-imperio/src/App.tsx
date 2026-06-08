import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/Privateroute';
// import { Dashboard } from './pages/Dashboard'; // Lo crearemos en el siguiente paso

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />
        
        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<div>Bienvenido al Senado (Dashboard)</div>} />
          {/* Aquí añadirás: <Route path="/provincias" element={<ProvinciasList />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;