import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import Clientes from "../pages/Clientes";
import Trabajos from "../pages/Trabajos";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<DashboardHome />} />

          <Route path="clientes" element={<Clientes />} />

          <Route path="trabajos" element={<Trabajos />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}