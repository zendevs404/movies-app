import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('spider man');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async (term) => {
    const API_URL = `https://www.omdbapi.com/?apikey=a99403e2&s=${term}`;
    try {
      const response = await axios.get(API_URL);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.Error);
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  // Handle pencarian
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className="app">
      <Header title="Simple Movies App" />
      <Search search={handleSearch} />
      {errorMessage ? <p className="error">{errorMessage}</p> : null}
      <div className="movies-container">
        {movies.length > 0
          ? movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          : <p>No movies found!</p>
        }
      </div>
    </div>
  );
};

export default App;
