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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Nuevo Cliente</h2>

      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}