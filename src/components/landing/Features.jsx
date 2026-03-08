export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Funciones del sistema
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <Feature icon="👥" text="Gestión de clientes" />
        <Feature icon="📋" text="Gestión de trabajos" />
        <Feature icon="📊" text="Dashboard con estadísticas" />
        <Feature icon="☁️" text="Datos guardados en la nube" />
        <Feature icon="📱" text="Funciona desde celular" />
        <Feature icon="🌙" text="Modo oscuro incluido" />

      </div>

    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="dark:text-gray-200">{text}</p>
    </div>
  );
}