import { db } from "./firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

export const getClientesRef = (userId) => {
  return collection(db, "users", userId, "clientes");
};

// realtime listener
export const escucharClientes = (userId, callback) => {
  const ref = getClientesRef(userId);

  return onSnapshot(ref, (snapshot) => {
    const clientes = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    callback(clientes);
  });
};

// crear cliente
export const crearCliente = async (userId, data) => {
  const ref = getClientesRef(userId);
  return await addDoc(ref, data);
};

// eliminar cliente
export const eliminarCliente = async (userId, clienteId) => {
  const clienteRef = doc(db, "users", userId, "clientes", clienteId);
  return await deleteDoc(clienteRef);
};

// actualizar cliente
export const actualizarCliente = async (userId, clienteId, data) => {
  const clienteRef = doc(db, "users", userId, "clientes", clienteId);
  return await updateDoc(clienteRef, data);
};