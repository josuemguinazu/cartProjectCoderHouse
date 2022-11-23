import React from 'react';

const CartWidget = () => {
  return (
    <div className='d-flex align-items-center'>
      <h5>Uniformes Empresariales</h5>
      <img src={require('../img/cart.png')} alt='Logo Uniformes' width='44' />
    </div>
  );
};

export default CartWidget;
