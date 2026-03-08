import { useState, useEffect } from "react";

export default function ModalEditarTrabajo({ trabajo, onClose, onSave }) {
  const [form, setForm] = useState({
    titulo: "",
    clienteNombre: "",
    estado: "pendiente",
    fecha: "",
  });

  useEffect(() => {
    if (trabajo) {
      setForm({
  titulo: trabajo.titulo || "",
  clienteNombre: trabajo.clienteNombre || "",
  estado: trabajo.estado || "pendiente",
  fecha: trabajo.fecha || "",
});
    }
  }, [trabajo]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(trabajo.id, form);
  };

  if (!trabajo) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white dark:bg-gray-900 p-6 rounded w-96 space-y-4">

        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Editar trabajo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />

          <input
            name="clienteNombre"
            value={form.clienteNombre}
            onChange={handleChange}
            placeholder="Cliente"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />

          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />

          <select
            name="estado"
            value={form.estado}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          >
            <option value="pendiente">Pendiente</option>
            <option value="proceso">En proceso</option>
            <option value="terminado">Terminado</option>
          </select>

          <div className="flex justify-end gap-2 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Guardar
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}