import React from 'react';
import type { FormValuesTypes } from '../../App';

type ServiceListProps = {
  services: FormValuesTypes[];
  handleRemoveService: (service: FormValuesTypes) => void;
  hidePasswords: boolean;
};

function ServiceList({ services, handleRemoveService, hidePasswords }: ServiceListProps) {
  if (services.length === 0) {
    return <p className="message">Nenhuma senha cadastrada 🔒</p>;
  }

  return (
    <ul className="style-ul">
      {services.map((service: FormValuesTypes) => (
        <li key={ service.nome } className="service-container">
          <a href={ service.url }>{service.nome}</a>
          <p>
            <span>{service.login}</span>
          </p>
          <p>
            {hidePasswords ? <span>******</span> : <span>{service.senha}</span>}
          </p>
          <button
            type="button"
            name="remove-btn"
            data-testid="remove-btn"
            onClick={ () => handleRemoveService(service) }
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
