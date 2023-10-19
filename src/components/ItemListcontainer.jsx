// import { getProducts } from '../services/getProducts';
import { useEffect, useState } from 'react';
import { getProductos } from '../services/firebase';
import { useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { getAllProducts } from '../Redux/slices/products/thunks';
import { Loader } from './Loader';

//aca recibo los productos del fetch
const ItemListContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [item, setItem] = useState({});

  const dispatch = useDispatch();

  const init = async () => {
    // await uploadDB();
    const products = await getProductos();
    setAllProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
    dispatch(getAllProducts());
  }, []);

  return <>{isLoading ? <Loader /> : <ItemList allProducts={allProducts} />};</>;
};

export default ItemListContainer;
