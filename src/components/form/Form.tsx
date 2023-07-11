import React from 'react';

function Form() {
  return (
    <form className="styled-form">
      <label className="form-label">
        Nome do serviço
        <input type="text" name="nome" />
      </label>
      <label className="form-label">
        Login
        <input type="text" name="login" />
      </label>
      <label className="form-label">
        Senha
        <input type="password" name="senha" />
      </label>
      <label className="form-label">
        URL
        <input type="text" name="url" />
      </label>
      <br />
      <br />
      <button className="form-btn">
        Cadastrar
      </button>
      <br />
      <button className="form-btn">
        Cancelar
      </button>
    </form>
  );
}

export default Form;
