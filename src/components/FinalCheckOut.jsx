import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
// import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom';

export const FinalCheckOut = () => {
  const { name, email, adress } = useContext(UserContext);
  // const { cart } = useContext(CartContext);
  // console.log(cart);
  // console.log(name);
  return (
    <>
      <div className='finalContainer'>
        <div>
          <h1>¡{name} felicitaciones por tu compra!</h1>
          <h2>Se ha enviado un correo a {email} con los detalles de la compra.</h2>
          <h2>La entrega se realizará en {adress}.</h2>
        </div>
        <div className='btnFinal'>
          <Link to={'/'} className='btnLink '>
            <b>Volver a inicio :)</b>
          </Link>
        </div>
      </div>
    </>
  );
};
