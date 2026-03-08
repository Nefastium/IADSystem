export default function Problema() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        ¿Te pasa esto en tu trabajo?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <p className="text-lg">📄</p>
          <p className="mt-2 dark:text-gray-200">
            Trabajos anotados en papel o notas
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <p className="text-lg">📱</p>
          <p className="mt-2 dark:text-gray-200">
            Clientes mezclados en WhatsApp
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <p className="text-lg">⏱</p>
          <p className="mt-2 dark:text-gray-200">
            No sabes qué trabajos están pendientes
          </p>
        </div>

      </div>

    </section>
  );
}