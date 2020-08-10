import React, { useState, useEffect } from "react";
import Repo from "./components/repo/Repo";
import "./App.css";

import { fetchRepos } from "./api/index";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchAPI = async () => {
      setRepos(await fetchRepos(pageNumber));
    }
    fetchAPI()
  }, [pageNumber]);

  return (
    <div className="main-container">
      {repos.map(repo => (
        <Repo key={repo.id} data={repo} />
      ))}
    </div>
  );
};

export default App;
