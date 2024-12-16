import React from 'react';

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A'
      ? 'https://via.placeholder.com/300x450?text=No+Image'
      : movie.Poster;

  return (
    <div className="movie">
      <img src={poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
