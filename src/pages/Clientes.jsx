import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClienteForm from "../components/clientes/ClienteForm";
import ClienteList from "../components/clientes/ClienteList";
import {
  crearCliente,
  obtenerClientes,
  eliminarCliente,
} from "../services/clientesService";

export default function Clientes() {
  const { user } = useContext(AuthContext);
  const [clientes, setClientes] = useState([]);

  const cargarClientes = async () => {
    const data = await obtenerClientes(user.uid);
    setClientes(data);
  };

  useEffect(() => {
    if (user) cargarClientes();
  }, [user]);

  const handleCrear = async (data) => {
    await crearCliente(user.uid, data);
    cargarClientes();
  };

  const handleEliminar = async (id) => {
    await eliminarCliente(user.uid, id);
    cargarClientes();
  };

  return (
    <div>
      <ClienteForm onSave={handleCrear} />
      <ClienteList clientes={clientes} onDelete={handleEliminar} />
    </div>
  );
}