import { useState, createContext } from 'react';
import Swal from 'sweetalert2';

export const UserContext = createContext(); // puede definir entre () un valor/propiedad por default

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [tel, setTel] = useState('');
  const [adress, setAdress] = useState('');
  const [card, setCard] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || pass === '' || tel === '' || adress === '' || card === '' || cvc === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete los campos correctamente!',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Todo marcha bien Milhouse',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    }
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
  const userCard = (e) => {
    setCard(e.target.value);
  };
  const userCvc = (e) => {
    setCvc(e.target.value);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          handleSubmit,
          userName,
          name,
          userEmail,
          email,
          userPass,
          pass,
          userTel,
          tel,
          userAdress,
          adress,
          userCard,
          card,
          userCvc,
          cvc,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
