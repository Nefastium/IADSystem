import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const linkStyle = ({ isActive }) =>
  `block px-4 py-2 rounded transition ${
    isActive ? "bg-blue-500 text-white " : "hover:bg-gray-200 dark:hover:bg-gray-700"
  }`;

  return (
    <div className="w-64 bg-white dark:bg-gray-950 shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6 dark:text-gray-100">IADSystem</h2>

      <nav className="space-y-2 dark:text-gray-100">
        <NavLink to="/dashboard/home" className={linkStyle}>
          🏠 Inicio
        </NavLink>

        <NavLink to="/dashboard/clientes" className={linkStyle}>
          👥 Clientes
        </NavLink>

        <NavLink to="/dashboard/trabajos" className={linkStyle}>
          🔧 Trabajos
        </NavLink>

        <NavLink to="/dashboard/presupuestos" className={linkStyle}>
          📄 Presupuestos
        </NavLink>

        <NavLink to="/dashboard/cobros" className={linkStyle}>
          💰 Cobros
        </NavLink>

        <NavLink to="/dashboard/reportes" className={linkStyle}>
          📊 Reportes
        </NavLink>

        <NavLink to="/dashboard/agenda" className={linkStyle}>
          📅 Agenda
        </NavLink>

        <NavLink to="/dashboard/configuracion" className={linkStyle}>
          ⚙ Configuración
        </NavLink>
      </nav>
    </div>
  );
}