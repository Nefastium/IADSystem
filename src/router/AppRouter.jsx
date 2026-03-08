import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

import Clientes from "../pages/Clientes";
import Trabajos from "../pages/Trabajos";
import Presupuestos from "../pages/Presupuestos";
import Cobros from "../pages/Cobros";
import Reportes from "../pages/Reportes";
import Agenda from "../pages/Agenda";
import Configuracion from "../pages/Configuracion";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PUBLICA */}
        <Route path="/" element={<Landing />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD PRIVADO */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* PAGINA PRINCIPAL DEL DASHBOARD */}
          <Route index element={<DashboardHome />} />

          <Route path="home" element={<DashboardHome />} />

          <Route path="clientes" element={<Clientes />} />

          <Route path="trabajos" element={<Trabajos />} />

          <Route path="presupuestos" element={<Presupuestos />} />

          <Route path="cobros" element={<Cobros />} />

          <Route path="reportes" element={<Reportes />} />

          <Route path="agenda" element={<Agenda />} />

          <Route path="configuracion" element={<Configuracion />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}