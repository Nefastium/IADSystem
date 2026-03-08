import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import {
  escucharTrabajos,
  crearTrabajo,
  eliminarTrabajo as eliminarTrabajoService,
  actualizarTrabajo
} from "../services/trabajosService";

import TrabajoCard from "../components/trabajos/TrabajoCard";
import FiltroTrabajos from "../components/trabajos/FiltroTrabajos";
import ModalEditarTrabajo from "../components/trabajos/ModalEditarTrabajo";

import KanbanTrabajos from "../components/trabajos/KanbanTrabajos";

export default function Trabajos() {

  const { user } = useContext(AuthContext);

  const [trabajos, setTrabajos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [trabajoEditar, setTrabajoEditar] = useState(null);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = escucharTrabajos(user.uid, setTrabajos);

    return unsubscribe;
  }, [user]);

  const handleCrear = async () => {
    await crearTrabajo(user.uid, {
      titulo: "Nuevo trabajo",
      descripcion: "Descripción",
      estado: "pendiente",
      precio: 0
    });
  };

  const handleEliminar = async (id) => {
    await eliminarTrabajoService(user.uid, id);
  };

  const guardarEdicion = async (id, data) => {

    const { id: _, ...dataSinId } = data;

    await actualizarTrabajo(user.uid, id, dataSinId);

    setTrabajoEditar(null);
  };

  const trabajosFiltrados = trabajos.filter((t) => {

    const titulo = t.titulo || "";
    const cliente = t.clienteNombre || "";

    const coincideBusqueda =
      titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.toLowerCase().includes(busqueda.toLowerCase());

    const coincideEstado =
      filtro === "todos" || t.estado === filtro;

    return coincideBusqueda && coincideEstado;
  });

  const moverTrabajo = async (trabajoId, nuevoEstado) => {

  const trabajo = trabajos.find((t) => t.id === trabajoId);

  if (!trabajo) return;

    await actualizarTrabajo(user.uid, trabajoId, {
      estado: nuevoEstado
    });

  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 space-y-6">

      <h1 className="text-2xl font-bold dark:text-gray-100">
        Trabajos
      </h1>

      <button
        onClick={handleCrear}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Crear trabajo
      </button>

      {/* BUSCADOR */}

      <input
        type="text"
        placeholder="Buscar trabajo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      />

      {/* FILTROS */}

      <FiltroTrabajos
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* LISTADO */}

      <KanbanTrabajos
        trabajos={trabajosFiltrados}
        onMove={moverTrabajo}
      />

      {/* MODAL EDITAR */}

      {trabajoEditar && (
        <ModalEditarTrabajo
          trabajo={trabajoEditar}
          onClose={() => setTrabajoEditar(null)}
          onSave={guardarEdicion}
        />
      )}

    </div>
  );
}