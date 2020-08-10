import React from "react";
import GitHubButton from "react-github-btn";
import "./Repo.css";

const Repo = ({ data }) => {
  const {
    name,
    created_at,
    description,
    html_url,
    owner: { avatar_url, login }
  } = data;
  const daysAgo = Math.abs(
    30 - created_at.split("T")[0].split("-")[2] + new Date().getDate()
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
            href={html_url}
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href={`${html_url}/issues`}
            data-icon="octicon-issue-opened"
            data-size="large"
            data-show-count="true"
            aria-label="Issue ntkme/github-buttons on GitHub"
          >
            Issue
          </GitHubButton>
          <span>
            Submitted {daysAgo} days ago by {login}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
