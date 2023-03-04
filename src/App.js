import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import CategoryFilter from "./CategoryFilter";
import moviesData from "./moviesData";
import MovieCard from "./MovieCard";
import "./Appa.css";
import Pagination from "./Pagination";


const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };
  

  const handleAddMovie = (title, category) => {
    const id = Math.max(...movies.map((movie) => movie.id)) + 1;
    const likes = 0;
    const dislikes = 0;
    const newMovie = { id, title, category, likes, dislikes };
    setMovies([...movies, newMovie]);
  };

  const handleLikeToggle = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        const liked = !movie.liked;
        const dislikes = liked ? movie.dislikes - 1 : movie.dislikes;
        const likes = liked ? movie.likes + 1 : movie.likes - 1;
        return { ...movie, liked, likes, dislikes };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchInput = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    let filteredMovies = moviesData;

    if (selectedCategory !== "all") {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.category === selectedCategory
      );
    }

    if (searchValue) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setMovies(filteredMovies);
  }, [selectedCategory, searchValue]);

  const categories = Array.from(
    new Set(moviesData.map((movie) => movie.category))
  ).concat("all");

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <MovieList
        movies={movies}
        onDelete={handleDeleteMovie}
        onLikeToggle={handleLikeToggle}
      />
    </div>
  );
};

export default App;
