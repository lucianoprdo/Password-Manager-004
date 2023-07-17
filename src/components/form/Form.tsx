import React from 'react';
import type { FormValuesTypes } from '../../App';
import '../../styles/Form.css';

type FormProps = {
  initialFormValues: FormValuesTypes,
  setShowForm: any,
};

function Form({ initialFormValues, setShowForm }: FormProps) {
  const { nome, login, senha, url } = initialFormValues;

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <form className="styled-form">
      <label className="form-label">
        <p className="input-names">Nome do serviço</p>
        <input
          type="text"
          name="nome"
          className="input-style"
          value={ nome }
        />
      </label>
      <label className="form-label">
        <p className="input-names">Login</p>
        <input
          type="text"
          name="login"
          className="input-style"
          value={ login }
        />
      </label>
      <label className="form-label">
        <p className="input-names">Senha</p>
        <input
          type="password"
          name="senha"
          className="input-style"
          value={ senha }
        />
      </label>
      <label className="form-label">
        <p className="input-names">URL</p>
        <input
          type="text"
          name="url"
          className="input-style"
          value={ url }
        />
      </label>
      <br />
      <br />
      <div className="buttons-container">
        <button className="form-btn">
          Cadastrar
        </button>
        <br />
        <button
          onClick={ handleButtonClick }
          className="form-btn-cancel"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Form;
