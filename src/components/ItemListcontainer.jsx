import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProductos, uploadDB } from '../services/firebase';
// import { getProducts } from '../services/getProducts';
import ItemList from './ItemList';

//aca recibo los productos del fetch
const ItemListContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [item, setItem] = useState({});

  const init = async () => {
    // await uploadDB();
    const products = await getProductos();
    setAllProducts(products);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <ItemList allProducts={allProducts} />;
    </>
  );
};

export default ItemListContainer;
