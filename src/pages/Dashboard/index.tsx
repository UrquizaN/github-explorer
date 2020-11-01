import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/10662534?s=460&u=254ca99ff6f92878257070c8965031999afa796c&v=4"
            alt="Urquiza Nóbrega"
          />
          <div>
            <strong>Urquiza Nóbrega</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={24} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/10662534?s=460&u=254ca99ff6f92878257070c8965031999afa796c&v=4"
            alt="Urquiza Nóbrega"
          />
          <div>
            <strong>Urquiza Nóbrega</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={24} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/10662534?s=460&u=254ca99ff6f92878257070c8965031999afa796c&v=4"
            alt="Urquiza Nóbrega"
          />
          <div>
            <strong>Urquiza Nóbrega</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
