import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";

export default function Topbar({ onNuevoTrabajo }) {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const user = auth.currentUser;

  return (
    <div className="bg-white dark:bg-gradient-to-r from-gray-950 from-15% via-blue-500 to-red-500 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center p-4 shadow-sm">
      
      <h1 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
        Panel Principal

        {user && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.displayName || user.email}
          </p>
        )}
      </h1>
      
      <div className="flex items-center gap-3">
        <button
          onClick={onNuevoTrabajo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Nuevo Trabajo
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}