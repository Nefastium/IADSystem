import { useState } from "react";

export default function NuevoTrabajoModal({ open, onClose, onSave }) {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    onSave({
      titulo,
      descripcion,
      precio: Number(precio),
      estado: "pendiente"
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

      <div className="bg-white p-6 rounded w-96 dark:bg-gray-800">

        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">
          Nuevo Trabajo
        </h2>

        <input
          className="border p-2 w-full mb-3 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Precio"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <div className="flex justify-end gap-2 dark:text-gray-100">

          <button
            onClick={onClose}
            className="px-4 py-2"
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Guardar
          </button>

        </div>

      </div>

    </div>
  );
}