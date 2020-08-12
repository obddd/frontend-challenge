import React from 'react';
import './GithubButton.css';

const GithubButton = ({ type, icon, count, link }) => {
  return (
    <div>
      <a className="github-button" href={link}>
        <i className={icon}></i> {type}: {count}
      </a>
    </div>
  );
};

export default GithubButton;
