import React from 'react';
import GitHubButton from '../githubButton/GithubButton';
import './Repo.css';

const Repo = ({ data }) => {
  const {
    name,
    created_at,
    description,
    html_url,
    stargazers_count,
    open_issues,
    owner: { avatar_url, login },
  } = data;

  const daysAgo = Math.abs(
    30 - created_at.split('T')[0].split('-')[2] + new Date().getDate()
  );

  return (
    <div className="repo-container">
      <div className="avatar-container">
        <img className="avatar" src={avatar_url} alt="avatar" />
      </div>
      <div className="desc-container">
        <h1 className="heading">{name}</h1>
        <span>{description}</span>
        <div className="info">
          <GitHubButton
            type="Stars"
            icon="fa fa-star-o"
            count={stargazers_count}
            link={html_url}
          />
          <GitHubButton
            type="Issues"
            icon="fa fa-exclamation-circle"
            count={open_issues}
            link={`${html_url}/issues`}
          />
          <span>
            Submitted {daysAgo} days ago by {login}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
