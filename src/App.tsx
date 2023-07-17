import './App.css';
import { useState } from 'react';
import Title from './components/title/Title';
import Form from './components/form/Form';

export type FormValuesTypes = {
  nome: string,
  login: string,
  senha: string,
  url: string,
  button: boolean,
  setShowForm: any,
};

const initialFormValues = {
  nome: '',
  login: '',
  senha: '',
  url: '',
  button: false,
  setShowForm: false,
};

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="app-container">
      <Title />
      { !showForm
      && <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button> }
      { showForm
      && <Form initialFormValues={ initialFormValues } setShowForm={ setShowForm } /> }
    </div>
  );
}

export default App;
