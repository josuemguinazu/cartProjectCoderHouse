import { useContext } from 'react';
import Cart from '../logos/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import { useSelector } from 'react-redux';

const CartWidget = () => {
  // const { cart } = useContext(CartContext);
  const { cart } = useSelector((state) => state.cart);

  const cartCounter = () => {
    const itemCount = cart.map((qty) => qty.qty);
    const itemTotal = itemCount.reduce((acc, el) => acc + el, 0);
    return itemTotal;
  };
  return (
    <div className='CartWidget d-flex align-items-center'>
      <h5>Uniformes Empresariales</h5>
      <div>
        <Link to={'cart'}>
          <img src={Cart} alt='Logo Uniformes' width='44' />
        </Link>
        <span className='cartLength'>{cartCounter()}</span>
      </div>
    </div>
  );
};

export default CartWidget;
