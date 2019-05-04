import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, ButtonContainer } from './styles';

const CompareList = ({ repositories, onUpdate, onRemove }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommint} <small>last commit</small>
          </li>
        </ul>

        <ButtonContainer>
          <button className="update" type="button" onClick={() => onUpdate(repository.id)}>
            <i className="fa fa-retweet" />
            Atualizar
          </button>
          <button className="remove" type="button" onClick={() => onRemove(repository.id)}>
            <i className="fa fa-trash" />
            Remover
          </button>
        </ButtonContainer>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CompareList;
