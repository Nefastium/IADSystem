import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  escucharTrabajos,
  crearTrabajo,
  eliminarTrabajo
} from "../services/trabajosService";

export default function Trabajos() {
  const { user } = useContext(AuthContext);
  const [trabajos, setTrabajos] = useState([]);

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
    await eliminarTrabajo(user.uid, id);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Trabajos</h1>

      <button
        onClick={handleCrear}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Crear trabajo
      </button>

      <div className="space-y-3">
        {trabajos.map((trabajo) => (
          <div
            key={trabajo.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <h3 className="font-bold">{trabajo.titulo}</h3>
              <p>{trabajo.descripcion}</p>
              <p className="text-sm text-gray-500">{trabajo.estado}</p>
            </div>

            <button
              onClick={() => handleEliminar(trabajo.id)}
              className="text-red-500"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}