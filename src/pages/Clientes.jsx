import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClienteForm from "../components/clientes/ClienteForm";
import ClienteList from "../components/clientes/ClienteList";
import {
  escucharClientes,
  crearCliente,
  eliminarCliente
} from "../services/clientesService";

export default function Clientes() {
  const { user } = useContext(AuthContext);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = escucharClientes(user.uid, setClientes);

    return unsubscribe;
  }, [user]);

  const handleCrear = async (data) => {
    await crearCliente(user.uid, data);
  };

  const handleEliminar = async (id) => {
    await eliminarCliente(user.uid, id);
  };

  return (
    <div>
      <ClienteForm onSave={handleCrear} />
      <ClienteList clientes={clientes} onDelete={handleEliminar} />
    </div>
  );
}