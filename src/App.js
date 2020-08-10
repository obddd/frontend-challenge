import React, { useState, useEffect } from "react";
import Repo from "./components/repo/Repo";
import "./App.css";

import {fetchRepos} from "./api/index";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchRepos(pageNumber);
  }, [pageNumber]);

  return (
    <div className="main-container">
      <Repo />
    </div>
  );
};

export default App;
