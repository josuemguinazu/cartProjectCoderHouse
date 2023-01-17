import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

export const UserData = () => {
  const { handleSubmit, userName, name, userEmail, email, userPass, pass, userTel, tel, userAdress, adress, userCard, card, userCvc, cvc } =
    useContext(UserContext);
  return (
    <>
      <div>
        <div className='formLeft'>
          <h3>Datos personales</h3>
          <form onSubmit={handleSubmit}>
            <input onChange={userName} value={name} type='text' placeholder='nombre' name='name' />
            <input onChange={userEmail} value={email} type='text' placeholder='email' name='email' />
            <input onChange={userPass} value={pass} type='password' placeholder='password' name='pass' />
            <input onChange={userTel} value={tel} type='number' placeholder='tel' name='tel' />
            <input onChange={userAdress} value={adress} type='text' placeholder='direccion' name='adress' />
            <input onChange={userCard} value={card} type='text' placeholder='tarjeta de credito' name='card' />
            <input onChange={userCvc} value={cvc} type='password' placeholder='cvc' name='cvc' />
            <input className='btnLink' type='submit' value='Confirmar Datos' />
          </form>
        </div>
      </div>
    </>
  );
};
