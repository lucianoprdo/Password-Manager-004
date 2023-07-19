import './App.css';
import { useState } from 'react';
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
  const [services, setServices] = useState<FormValuesTypes[]>([]);

  const handleAddService = (service: FormValuesTypes) => {
    setServices((prevServices) => [...prevServices, service]);
    setShowForm(false);
  };

  const handleRemoveService = (service: FormValuesTypes) => {
    const updatedServices = services.filter((item) => item.nome !== service.nome);
    setServices(updatedServices);
  };

  return (
    <div className="app-container">
      <Title />
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
        <ServiceList services={ services } handleRemoveService={ handleRemoveService } />
      )}
      <hr />
    </div>
  );
}

export default App;
