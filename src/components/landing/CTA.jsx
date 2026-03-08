import { useNavigate } from "react-router-dom";

export default function CTA() {

  const navigate = useNavigate();

  return (
    <section className="text-center py-24 bg-blue-600 text-white">

      <h2 className="text-3xl font-bold mb-6">
        Empieza a organizar tu trabajo hoy
      </h2>

      <button
        onClick={() => navigate("/login")}
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
      >
        Crear cuenta / Iniciar sesión
      </button>

    </section>
  );
}