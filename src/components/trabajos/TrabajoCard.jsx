export default function TrabajoCard({ trabajo, onEdit, onDelete }) {

  const estadoColor = {
    pendiente: "bg-yellow-100 text-yellow-800",
    proceso: "bg-blue-100 text-blue-800",
    terminado: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow border dark:border-gray-700 space-y-2">

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">
          {trabajo.titulo}
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded ${estadoColor[trabajo.estado]}`}
        >
          {trabajo.estado}
        </span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Cliente: {trabajo.clienteNombre}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Fecha: {trabajo.fecha}
      </p>

      <div className="flex gap-2 pt-2">
        <button
          onClick={() => onEdit(trabajo)}
          className="text-blue-600 text-sm hover:underline"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(trabajo.id)}
          className="text-red-600 text-sm hover:underline"
        >
          Eliminar
        </button>
      </div>

    </div>
  );
}