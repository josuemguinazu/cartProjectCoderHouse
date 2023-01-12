import { useContext, useState } from 'react';
import { CartContext } from './Context/CartContext';

export const CheckOut = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [tel, setTel] = useState('');
  const [adress, setAdress] = useState('');

  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(pass);
    console.log(tel);
    console.log(adress);
  };
  const userName = (e) => {
    setName(e.target.value);
  };
  const userEmail = (e) => {
    setEmail(e.target.value);
  };
  const userPass = (e) => {
    setPass(e.target.value);
  };
  const userTel = (e) => {
    setTel(e.target.value);
  };
  const userAdress = (e) => {
    setAdress(e.target.value);
  };

  const total = () => {
    const STprods = cart.map((prod) => prod.precio * prod.qty);
    const totalProds = STprods.reduce((acc, cv) => acc + cv);
    return totalProds;
  };

  return (
    <>
      <div className='checkContainer'>
        <div className='formLeft'>
          <h3>Datos personales</h3>
          <form onSubmit={handleSubmit}>
            <input onChange={userName} value={name} type='text' placeholder='nombre' name='name' />
            <input onChange={userEmail} value={email} type='text' placeholder='email' name='email' />
            <input onChange={userPass} value={pass} type='password' placeholder='password' name='pass' />
            <input onChange={userTel} value={tel} type='number' placeholder='tel' name='tel' />
            <input onChange={userAdress} value={adress} type='text' placeholder='direccion' name='adress' />
            <input className='btnLink' type='submit' value='Confirmar Datos' />
          </form>
        </div>

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
        <button
          onClick={() => {
            alert(
              `Felicitaciones ${name} por su compra. Ha realizado un pago por $${total()}. Recibira en su correo: ${email} los detalles de la compra. El producto será entregado en ${adress}`
            );
          }}
          className='btnLink buyBtn'
        >
          Comprar !
        </button>
      </div>
    </>
  );
};
