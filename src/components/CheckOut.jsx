import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import { UserContext } from './Context/UserContext';
import { UserData } from './UserData';

export const CheckOut = () => {
  const { cart } = useContext(CartContext);
  const { name, email, pass, tel, adress, card, cvc } = useContext(UserContext);

  const total = () => {
    const STprods = cart.map((prod) => prod.precio * prod.qty);
    const totalProds = STprods.reduce((acc, cv) => acc + cv);
    return totalProds;
  };

  return (
    <>
      <div className='checkContainer'>
        <UserData />
        <div>
          <h3>Resumen de compra</h3>
          <div className='prodRight'>
            {cart.map((prod) => (
              <div className='rsmProds'>
                <h4>Producto: {prod.nombre}</h4>
                <h4>Tela: {prod.tela}</h4>
                <h4>Cantidad: {prod.qty}</h4>
                <h4>Precio: ${prod.precio}.- (unidad) </h4>
                <h4>subTotal: ${prod.precio * prod.qty}.-</h4>
              </div>
            ))}
            <h2>
              <b>Total a pagar: ${total()}.-</b>
            </h2>
          </div>
        </div>
      </div>
      <div className='btnBuy'>
        {name === '' || email === '' || pass === '' || tel === '' || adress === '' || card === '' || cvc === '' ? (
          <button className='btnLink buyBtn'>Completar Campos</button>
        ) : (
          <Link className='btnLink buyBtn' to={'/finalcheckout'}>
            <b> Comprar !</b>
          </Link>
        )}
      </div>
    </>
  );
};
