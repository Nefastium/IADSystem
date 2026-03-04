import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">IADSystem Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p>Bienvenido al sistema 🚀</p>
      </div>
    </div>
  );
}