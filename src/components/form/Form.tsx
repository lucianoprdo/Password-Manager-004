import React, { useState } from 'react';
import type { FormValuesTypes } from '../../App';
import '../../styles/Form.css';

type FormProps = {
  initialFormValues: FormValuesTypes;
  setShowForm: any;
  handleAddService: (service: FormValuesTypes) => void;
};

function Form({ initialFormValues, setShowForm, handleAddService }: FormProps) {
  const [formValues, setFormValues] = useState<FormValuesTypes>(initialFormValues);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handlePasswordClick = () => {
    setIsPasswordClicked(true);
  };

  const handlePasswordChange = () => {
    setIsPasswordChange(!isPasswordChange);
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

    const newService = {
      nome: formValues.nome,
      login: formValues.login,
      senha: formValues.senha,
      url: formValues.url,
    };

    setFormValues(initialFormValues);
    setIsPasswordClicked(false);
    handleAddService(newService);
  };

  function getPasswordValidationClass(condition: any) {
    return condition ? 'valid-password-check' : 'invalid-password-check';
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <form className="styled-form" onSubmit={ handleSubmit }>
      <label className="form-label">
        <p className="input-names">Nome do serviço</p>
        <input
          type="text"
          name="nome"
          className="input-style"
          value={ formValues.nome }
          onChange={ handleInputChange }
          required
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
          required
        />
      </label>

      <label className="form-label">
        <p className="input-names">Senha</p>
        <input
          type={ isPasswordChange ? 'text' : 'password' }
          name="senha"
          className="input-style"
          value={ formValues.senha }
          onChange={ handleInputChange }
          onClick={ handlePasswordClick }
          required
        />
      </label>

      <br />
      {isPasswordClicked && (
        <fieldset>
          <div className="password-validation">
            <p className={ getPasswordValidationClass(formValues.senha.length >= 8) }>
              Possuir 8 ou mais caracteres
            </p>
            <p
              className={ getPasswordValidationClass(
                formValues.senha.length >= 8 && formValues.senha.length <= 16,
              ) }
            >
              Possuir até 16 caracteres
            </p>
            <p className={ getPasswordValidationClass(/(?=.*[a-zA-Z])(?=.*[0-9])/.test(formValues.senha)) }>
              Possuir letras e números
            </p>
            <p className={ getPasswordValidationClass(/[!@#$%^&*]/.test(formValues.senha)) }>
              Possuir algum caractere especial
            </p>
          </div>
        </fieldset>
      )}

      <label className="form-label">
        <p className="input-names">URL</p>
        <input
          type="text"
          name="url"
          className="input-style"
          value={ formValues.url }
          onChange={ handleInputChange }
          required
        />
      </label>

      <br />
      <br />

      <div className="buttons-container">
        <button
          className="form-btn"
          name="cadastrar"
          type="button"
          disabled={ !isFormValid }
          onClick={ handleButtonClick }
        >
          Cadastrar
        </button>

        <br />

        <button
          className="form-btn-cancel"
          name="cancelar"
          onClick={ () => setShowForm(false) }
          type="button"
        >
          Cancelar
        </button>

        <br />

        <button
          className="form-btn-show-hide"
          type="button"
          data-testid="show-hide-form-password"
          onClick={ handlePasswordChange }
        >
          {isPasswordChange ? 'Esconder Senha' : 'Mostrar Senha'}
        </button>

      </div>
    </form>
  );
}

export default Form;
