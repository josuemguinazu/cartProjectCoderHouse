import { useState } from 'react';

const CartCounter = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => count < stock && setCount(count + 1);

  const removeItem = () => count > initial && setCount(count - 1);

  return (
    <>
      <div className='counterDiv'>
        <button className='btnCount' onClick={addItem}>
          +
        </button>
        <p className='count'>{count}</p>
        <button className='btnCount' onClick={removeItem}>
          -
        </button>
      </div>
    </>
  );
};

export default CartCounter;
