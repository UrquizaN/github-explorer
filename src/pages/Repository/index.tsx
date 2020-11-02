import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, Issues, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={24} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
            alt="Facebook"
          />
          <div>
            <strong>facebook/react-native</strong>
            <p>DEscrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdafs">
          <div>
            <strong>DFSSDGSDG</strong>
            <p>ADGFDFGS</p>
          </div>

          <FiChevronRight size={24} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
