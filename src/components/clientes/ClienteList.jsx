export default function ClienteList({ clientes, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Lista de Clientes</h2>

      {clientes.length === 0 && (
        <p className="text-gray-500">No hay clientes aún.</p>
      )}

      {clientes.map(cliente => (
        <div
          key={cliente.id}
          className="border p-3 mb-2 rounded flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{cliente.nombre}</p>
            <p className="text-sm text-gray-600">{cliente.telefono}</p>
            <p className="text-sm text-gray-600">{cliente.direccion}</p>
          </div>

          <button
            onClick={() => onDelete(cliente.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}