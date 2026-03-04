import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle =
    "block px-4 py-2 rounded hover:bg-gray-200 transition";

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">IADSystem</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkStyle}>
          🏠 Inicio
        </NavLink>
        <NavLink to="/clientes" className={linkStyle}>
          👥 Clientes
        </NavLink>
        <NavLink to="/trabajos" className={linkStyle}>
          🔧 Trabajos
        </NavLink>
        <NavLink to="/presupuestos" className={linkStyle}>
          📄 Presupuestos
        </NavLink>
        <NavLink to="/cobros" className={linkStyle}>
          💰 Cobros
        </NavLink>
        <NavLink to="/reportes" className={linkStyle}>
          📊 Reportes
        </NavLink>
        <NavLink to="/agenda" className={linkStyle}>
          📅 Agenda
        </NavLink>
        <NavLink to="/configuracion" className={linkStyle}>
          ⚙ Configuración
        </NavLink>
      </nav>
    </div>
  );
}