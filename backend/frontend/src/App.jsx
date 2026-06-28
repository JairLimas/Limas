import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transferencias from "./pages/Transferencias";
import EstadoCuenta from "./pages/EstadoCuenta";
import Tarjetas from "./pages/Tarjetas";
import Configuracion from "./pages/Configuracion";
import Prestamos from "./pages/Prestamos";
import Creditos from "./pages/Creditos";

// Cliente autenticado si tiene usuario_id en localStorage
const isClienteAuth = () => !!localStorage.getItem("usuario_id");

const PrivateRoute = ({ children }) => {
  return isClienteAuth() ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          <Route index element={<Navigate to="/app/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transferencias" element={<Transferencias />} />
          <Route path="estado-cuenta" element={<EstadoCuenta />} />
          <Route path="tarjetas" element={<Tarjetas />} />
          <Route path="prestamos" element={<Prestamos />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}