import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/getProductById';
import { CartContext } from './Context/CartContext';

export default function Cart() {
  const { cart, cartTotal, removeItem, clearCart } = useContext(CartContext);

  // hacer alguna especie de alerta de carrito vacio
  if (cartTotal() === 0) {
    return (
      <div className='emptyCart'>
        <h1>No hay productos en el carrito :(</h1>
      </div>
    );
  }

  return (
    <>
      <button onClick={clearCart} className='btnLink emptyBtn'>
        Vaciar carrito
      </button>
      <div className='cartPage'>
        {cart.map((prod) => {
          return (
            <>
              <div className='cartProd'>
                <img className='cartImg' alt='Imagen del producto' src={prod.img} />
                <h3>Producto: {prod.nombre}</h3>
                <h4>Tela: {prod.tela}</h4>
                <h4>Cantidad: {prod.qty} unidades</h4>
                <h4>Precio: ${prod.precio}.-</h4>
                <h4>
                  <b>Subtotal: ${prod.precio * prod.qty}.-</b>
                </h4>
                <button
                  className='btnLink'
                  onClick={() => {
                    removeItem(prod.id);
                  }}
                >
                  Eliminar producto
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div className='btnCenter'>
        <Link to={'/CheckOut'} className='btnLink  btnFinal'>
          Finalizar compra !
        </Link>
      </div>
    </>
  );
}
