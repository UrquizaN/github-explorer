import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setinputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GithubExplorer', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setinputError('Digite o autor/repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setinputError('');
    } catch (err) {
      setinputError('Erro na busca deste repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
          placeholder="Digite o repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Error>{inputError}</Error>

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.owner.login}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
