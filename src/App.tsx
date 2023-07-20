import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Title from './components/title/Title';
import Form from './components/form/Form';
import ServiceList from './components/service-list/ServiceList';

export type FormValuesTypes = {
  nome: string,
  login: string,
  senha: string,
  url: string,
  button?: boolean,
  setShowForm?: any,
  hidePasswords?: boolean | undefined,
};

const initialFormValues = {
  nome: '',
  login: '',
  senha: '',
  url: '',
  button: false,
  setShowForm: false,
  hidePasswords: false,
};

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [services, setServices] = useState<FormValuesTypes[]>([]); // Esse estado está duplicado
  const [hidePasswords, setHidePasswords] = useState<boolean>(false);

  const handleAddService = (service: FormValuesTypes) => {
    setServices((prevServices) => [...prevServices, service]);
    setShowForm(false);

    // Mostra o alerta de sucesso com SweetAlert2
    Swal.fire({
      title: 'Serviço cadastrado com sucesso',
      icon: 'success',
      timer: 1500, // 1.5 segundos
      timerProgressBar: true,
    });
  };

  const handleRemoveService = (service: FormValuesTypes) => {
    const updatedServices = services.filter((item) => item.nome !== service.nome);
    setServices(updatedServices);
  };

  const handleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div className="app-container">
      <Title />
      <label className="checkbox">
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ handleHidePasswords }
        />
        Esconder senhas
      </label>

      { !showForm && (
        <button
          type="button"
          name="cadastrar nova senha"
          onClick={ () => setShowForm(true) }
        >
          Cadastrar nova senha
        </button>
      )}

      {showForm ? (
        <Form
          initialFormValues={ initialFormValues }
          setShowForm={ setShowForm }
          handleAddService={ handleAddService }
        />
      ) : (
        <ServiceList
          services={ services }
          hidePasswords={ hidePasswords }
          handleRemoveService={ handleRemoveService }
        />
      )}
      <hr />
    </div>
  );
}

export default App;
