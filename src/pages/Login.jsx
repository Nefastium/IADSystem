import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    alert(error.message);
  }
};

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
  if (user) {
      navigate("/dashboard");
  }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("¡Inicio de sesión exitoso!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="">Hola</p>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-3 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Entrar
        </button>
        <button
        type="button"
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white w-full py-2 rounded mt-2"
        >
        Ingresar con Google
        </button>
      </form>
    </div>
  );
}



