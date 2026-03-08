export default function ClienteList({ clientes, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-100">Lista de Clientes</h2>

      {clientes.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No hay clientes aún.</p>
      )}

      {clientes.map(cliente => (
        <div
          key={cliente.id}
          className="border p-3 mb-2 rounded flex justify-between items-center dark:border-gray-700"
        >
          <div>
            <p className="font-semibold dark:text-gray-100">{cliente.nombre}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{cliente.telefono}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{cliente.direccion}</p>
          </div>

          <button
            onClick={() => onDelete(cliente.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}