import { db } from "./firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

export const getTrabajosRef = (userId) => {
  return collection(db, "users", userId, "trabajos");
};

export const escucharTrabajos = (userId, callback) => {
  const ref = getTrabajosRef(userId);

  return onSnapshot(ref, (snapshot) => {
    const trabajos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    callback(trabajos);
  });
};

export const crearTrabajo = async (userId, data) => {
  const ref = getTrabajosRef(userId);

  return await addDoc(ref, {
    ...data,
    createdAt: serverTimestamp()
  });
};

export const eliminarTrabajo = async (userId, trabajoId) => {
  const trabajoRef = doc(db, "users", userId, "trabajos", trabajoId);
  return await deleteDoc(trabajoRef);
};

export const actualizarTrabajo = async (userId, trabajoId, data) => {
  const trabajoRef = doc(db, "users", userId, "trabajos", trabajoId);
  return await updateDoc(trabajoRef, data);
};