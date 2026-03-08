import { useState } from "react";

export default function ClienteForm({ onSave }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre) return alert("Nombre obligatorio");

    setLoading(true);
    await onSave(form);
    setLoading(false);

    setForm({ nombre: "", telefono: "", direccion: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-100">Nuevo Cliente</h2>

      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        className="border p-2 w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />

      <input
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
        className="border p-2 w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}