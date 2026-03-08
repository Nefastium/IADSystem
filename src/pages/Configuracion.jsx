import ThemeToggle from "../components/ui/ThemeToggle";

export default function Configuracion() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 space-y-6">

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Configuración
      </h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow border dark:border-gray-700 flex justify-between items-center">

        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Apariencia
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cambiar entre modo claro y oscuro
          </p>
        </div>

        <ThemeToggle />

      </div>

    </div>
  );
}