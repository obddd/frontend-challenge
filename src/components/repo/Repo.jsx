import React from "react";
import avatar from "../../assets/avatar.png";
import GitHubButton from "react-github-btn";
import "./Repo.css";

const Repo = () => {
  return (
    <div className="repo-container">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="desc-container">
        <h1 className="heading">TensorFlow</h1>
        <span>
          An Open Source Machine Learning Framework for Everyone
          https://tensorflow.org
        </span>
        <div className="info">
          <GitHubButton
            href="https://github.com/ntkme/github-buttons"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href="https://github.com/ntkme/github-buttons/issues"
            data-icon="octicon-issue-opened"
            data-size="large"
            data-show-count="true"
            aria-label="Issue ntkme/github-buttons on GitHub"
          >
            Issue
          </GitHubButton>
          <span>Submitted 30 days ago by tensorflow</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
