import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { escucharClientes } from "../services/clientesService";
import { escucharTrabajos } from "../services/trabajosService";
import StatCard from "../components/dashboard/StatCard";

export default function DashboardHome() {

  const { user } = useContext(AuthContext);

  const [clientes, setClientes] = useState([]);
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    if (!user) return;

    const unsubClientes = escucharClientes(user.uid, setClientes);
    const unsubTrabajos = escucharTrabajos(user.uid, setTrabajos);

    return () => {
      unsubClientes();
      unsubTrabajos();
    };

  }, [user]);

  // métricas
  const clientesTotal = clientes.length;

  const trabajosPendientes = trabajos.filter(
    t => t.estado === "pendiente"
  ).length;

  const trabajosTerminados = trabajos.filter(
    t => t.estado === "terminado"
  ).length;

  const ingresosMes = trabajos
    .filter(t => t.estado === "terminado")
    .reduce((sum, t) => sum + (t.precio || 0), 0);

  const pendientes = trabajos.filter(t => t.estado === "pendiente").length;

  const proceso = trabajos.filter(t => t.estado === "proceso").length;

  const terminados = trabajos.filter(t => t.estado === "terminado").length;

  const ingresos = trabajos
    .filter(t => t.estado === "terminado")
    .reduce((acc, t) => acc + (t.precio || 0), 0);

  const ultimosTrabajos = [...trabajos]
    .sort((a,b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
    .slice(0,5);

  return (

    <div className="bg-white dark:bg-gray-900 space-y-6 p-4">

      <h1 className="text-2xl font-bold dark:text-gray-100">
        Dashboard
      </h1>

      {/* cards */}

      <div className="grid md:grid-cols-4 gap-4">

        <StatCard
          title="Pendientes"
          value={pendientes}
          color="yellow"
          icon="🟡"
        />

        <StatCard
          title="En proceso"
          value={proceso}
          color="blue"
          icon="🔵"
        />

        <StatCard
          title="Terminados"
          value={terminados}
          color="green"
          icon="🟢"
        />

        <StatCard
          title="Ingresos"
          value={`$${ingresos}`}
          color="purple"
          icon="💰"
        />

      </div>

      {/* últimos trabajos */}

      <div className="bg-white p-6 rounded shadow dark:bg-gray-800">

        <h2 className="text-lg font-semibold mb-4 dark:text-gray-100">
          Últimos trabajos
        </h2>

        {ultimosTrabajos.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            No hay trabajos todavía
          </p>
        )}

        <div className="space-y-3">

          {ultimosTrabajos.map((trabajo) => (

            <div
              key={trabajo.id}
              className="border p-3 rounded flex justify-between items-center dark:border-gray-600 bg-white dark:bg-gray-700"
            >

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {trabajo.titulo}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {trabajo.estado}
                </p>
              </div>

              <div className="font-bold dark:text-gray-100">
                ${trabajo.precio || 0}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}