import React, { useState } from 'react';
import type { FormValuesTypes } from '../../App';
import '../../styles/Form.css';

type FormProps = {
  initialFormValues: FormValuesTypes,
  setShowForm: any,
};

function Form({ initialFormValues, setShowForm }: FormProps) {
  const { nome, login, senha, url } = initialFormValues;

  const [formValues, setFormValues] = useState<FormValuesTypes>(initialFormValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const isFormValid = (
    formValues.nome.trim() !== ''
    && formValues.login.trim() !== ''
    && formValues.senha.trim() !== ''
    && formValues.senha.length >= 8
    && formValues.senha.length <= 16
    && /[a-zA-Z]/.test(formValues.senha)
    && /[0-9]/.test(formValues.senha)
    && /[!@#$%^&*]/.test(formValues.senha)
  );

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
          value={ formValues.nome }
          onChange={ handleInputChange }
        />
      </label>
      <label className="form-label">
        <p className="input-names">Login</p>
        <input
          type="text"
          name="login"
          className="input-style"
          value={ formValues.login }
          onChange={ handleInputChange }
        />
      </label>
      <label className="form-label">
        <p className="input-names">Senha</p>
        <input
          type="password"
          name="senha"
          className="input-style"
          value={ formValues.senha }
          onChange={ handleInputChange }
        />
      </label>
      <label className="form-label">
        <p className="input-names">URL</p>
        <input
          type="text"
          name="url"
          className="input-style"
          value={ formValues.url }
          onChange={ handleInputChange }
        />
      </label>
      <br />
      <br />
      <div className="buttons-container">
        <button className="form-btn" disabled={ !isFormValid }>
          Cadastrar
        </button>
        <br />
        <button onClick={ handleButtonClick } className="form-btn-cancel">
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Form;
