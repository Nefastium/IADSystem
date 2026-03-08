export default function FiltroTrabajos({ filtro, setFiltro }) {
  const estados = ["todos", "pendiente", "proceso", "terminado"];

  return (
    <div className="flex gap-2 flex-wrap">

      {estados.map((estado) => (
        <button
          key={estado}
          onClick={() => setFiltro(estado)}
          className={`px-3 py-1 rounded text-sm border 
          ${
            filtro === estado
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          {estado}
        </button>
      ))}

    </div>
  );
}