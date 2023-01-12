import { useState } from 'react';

const CartCounter = ({ stock, qty, setQty }) => {
  const [stocks, setStocks] = useState(stock);

  // const actStock = setStocks(stock - count);

  const addItem = () => {
    qty < stock && setQty(qty + 1);
    setStocks(stock - qty);
  };

  const removeItem = () => {
    qty > 1 && setQty(qty - 1);
    stocks < stock && setStocks(stocks + 1);
  };

  return (
    <>
      <div className='counterDiv'>
        <button className='btnCount' onClick={addItem}>
          +
        </button>
        <p className='count'>{qty}</p>
        <button className='btnCount' onClick={removeItem}>
          -
        </button>
      </div>
    </>
  );
};

export default CartCounter;
