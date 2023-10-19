import { getProductos } from '../../../services/firebase';
import { setAllProducts, setIsLoading } from './productsSlice';

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    const products = await getProductos();
    dispatch(setAllProducts(products));
  };
};
