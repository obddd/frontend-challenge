import React, { useState, useEffect } from 'react';
import Repo from './components/repo/Repo';
import './App.css';

import pacman from './assets/ajax-loader.gif'

import { fetchRepos } from './api/index';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      const newRepos = await fetchRepos(pageNumber);
      setRepos((prevRepo) => [...prevRepo, ...newRepos]);
      setLoading(false);
    };
    fetchAPI();
  }, [pageNumber]);

  return (
    <div className="main-container">
      <div className="child-container" onScroll={handleScroll}>
        {repos && repos.map((repo) => <Repo key={repo.id} data={repo} />)}
      </div>
      {loading && <img className='spinner' src={pacman} alt='pacman'/>}
    </div>
  );
};

export default App;
