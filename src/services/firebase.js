import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCa8gZRwyenA9QuF1Qtf8n2q7pwdiklnOw',
  authDomain: 'prueba-14571.firebaseapp.com',
  projectId: 'prueba-14571',
  storageBucket: 'prueba-14571.appspot.com',
  messagingSenderId: '1038741293722',
  appId: '1:1038741293722:web:0a3fbef08ba6706be7ad23',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export const uploadDB = async () => {
  const promise = await fetch('./json/products.json');
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(db, 'productos'), {
      nombre: prod.nombre,
      tela: prod.tela,
      categoria: prod.categoria,
      precio: prod.precio,
      img: prod.img,
    });
  });
};

export const getProducto = async (id) => {
  const prod = await getDoc(doc(db, 'productos', id));
  const item = { ...prod.data(), id: prod.id };
  return item;
};

export const getProductos = async () => {
  const productos = await getDocs(collection(db, 'productos'));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

export const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, 'productos'), {
    nombre: objProducto.nombre,
    modelo: objProducto.modelo,
    idCategory: objProducto.idCategory,
    stock: objProducto.stock,
    precio: objProducto.precio,
    img: objProducto.img,
  });

  return estado;
};

export const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, 'productos', id), info);
  return estado;
};

export const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, 'productos', id));
  return estado;
};

export const createOrdenCompra = async (ordenCompraParams) => {
  console.log(ordenCompraParams);
  const ordenCompra = await addDoc(collection(db, 'ordenCompra'), ordenCompraParams);

  return ordenCompra;
};

export const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(db, 'ordenCompra', id));
  const ordenCompra = { ...item.data(), id: item.id };
  return ordenCompra;
};
