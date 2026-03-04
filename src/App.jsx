import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layout/DashboardLayout";

import DashboardHome from "./pages/DashboardHome";
import Clientes from "./pages/Clientes";
import Trabajos from "./pages/Trabajos";
import Presupuestos from "./pages/Presupuestos";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import Agenda from "./pages/Agenda";
import Cobros from "./pages/Cobros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/presupuestos" element={<Presupuestos />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/cobros" element={<Cobros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;