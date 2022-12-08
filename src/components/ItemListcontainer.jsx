import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../services/getProducts';
import ItemList from './ItemList';

//aca recibo los productos del fetch
const ItemListContainer = () => {
  const [allProducts, setAllProducts] = useState([]);

  const init = async () => {
    const products = await getProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    init();
  }, []);

  return <ItemList allProducts={allProducts} />;
};

export default ItemListContainer;
