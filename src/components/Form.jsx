import React from 'react';

const Form = () => {
  return (
    <form className='form row gy-2 gx-3 align-items-center bg-light'>
      <div className='col-auto'>
        <label className='visually-hidden' for='autoSizingInput'>
          Nombre
        </label>
        <input type='text' className='form-control' id='autoSizingInput' placeholder='Nombre' />
      </div>
      <div className='col-auto'>
        <label className='visually-hidden' for='autoSizingInput'>
          Nombre
        </label>
        <input type='text' className='form-control' id='autoSizingInput' placeholder='Empresa / Institución' />
      </div>
      <div className='col-auto'>
        <label className='visually-hidden' for='autoSizingInputGroup'>
          Username
        </label>
        <div className='input-group'>
          <input type='text' className='form-control' id='autoSizingInputGroup' placeholder='e-mail' />
        </div>
      </div>
      <div className='col-auto'>
        <label className='visually-hidden' for='autoSizingSelect'>
          Preference
        </label>
        <select className='form-select' id='autoSizingSelect'>
          <option selected>Uniformes</option>
          <option value='1'>Sanidad</option>
          <option value='2'>Administrativos</option>
        </select>
      </div>
      <div className='col-auto'>
        <div className='form-check'>
          <input className='form-check-input' type='checkbox' id='autoSizingCheck' />
          <label className='form-check-label' for='autoSizingCheck'>
            Quiero recibir promociones!
          </label>
        </div>
      </div>
      <div className='col-auto'>
        <button type='submit' className='btn btn-primary'>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
