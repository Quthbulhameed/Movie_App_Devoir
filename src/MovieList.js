import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MovieList = ({ movies, onDelete, onLikeToggle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleMoviesPerPageChange = (event) => {
    setMoviesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="movies-per-page">
        Show{" "}
        <select value={moviesPerPage} onChange={handleMoviesPerPageChange}>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>{" "}
        movies per page
      </div>
      <div className="movie-list">
        {currentMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
          />
        ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MovieList;
