import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const getClientesRef = (userId) => {
  return collection(db, "users", userId, "clientes");
};

export const crearCliente = async (userId, data) => {
  const ref = getClientesRef(userId);
  return await addDoc(ref, data);
};

export const obtenerClientes = async (userId) => {
  const ref = getClientesRef(userId);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const eliminarCliente = async (userId, clienteId) => {
  const clienteRef = doc(db, "users", userId, "clientes", clienteId);
  return await deleteDoc(clienteRef);
};

export const actualizarCliente = async (userId, clienteId, data) => {
  const clienteRef = doc(db, "users", userId, "clientes", clienteId);
  return await updateDoc(clienteRef, data);
};