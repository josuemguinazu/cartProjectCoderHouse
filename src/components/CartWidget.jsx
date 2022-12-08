import React from 'react';
import Cart from '../logos/cart.png';

const CartWidget = () => {
  return (
    <div className='CartWidget d-flex align-items-center'>
      <h5>Uniformes Empresariales</h5>
      <img src={Cart} alt='Logo Uniformes' width='44' />
    </div>
  );
};

export default CartWidget;
