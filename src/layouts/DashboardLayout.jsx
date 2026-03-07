import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import NuevoTrabajoModal from "../components/trabajos/NuevoTrabajoModal";
import { crearTrabajo } from "../services/trabajosService";
import { AuthContext } from "../context/AuthContext";

export default function DashboardLayout() {

  const { user } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);

  const handleCrearTrabajo = async (data) => {
    await crearTrabajo(user.uid, data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-6">

        <Topbar onNuevoTrabajo={() => setModalOpen(true)} />

        <Outlet />

      </main>

      <NuevoTrabajoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleCrearTrabajo}
      />

    </div>
  );
}