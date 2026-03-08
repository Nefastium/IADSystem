import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center">

      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Gestiona tus trabajos eléctricos
        <br />
        de forma simple
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        IADSystem es un sistema para organizar clientes, trabajos y
        seguimiento de tareas para electricistas y técnicos.
      </p>

      <div className="flex justify-center gap-4">

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Iniciar sesión
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg font-semibold dark:text-white"
        >
          Probar sistema
        </button>

      </div>

    </section>
  );
}