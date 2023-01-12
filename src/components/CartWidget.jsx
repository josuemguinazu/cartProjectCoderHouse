import React from 'react';
import Cart from '../logos/cart.png';
import { Link } from 'react-router-dom';
const CartWidget = () => {
  return (
    <div className='CartWidget d-flex align-items-center'>
      <h5>Uniformes Empresariales</h5>
      <Link to={'cart'}>
        <img src={Cart} alt='Logo Uniformes' width='44' />
      </Link>
    </div>
  );
};

export default CartWidget;
