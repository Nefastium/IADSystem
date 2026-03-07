import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";

export default function Topbar({ onNuevoTrabajo })  {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="font-semibold text-lg">
        Panel Principal
      </h1>

      <button
        onClick={onNuevoTrabajo}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Nuevo Trabajo
      </button>
      
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}