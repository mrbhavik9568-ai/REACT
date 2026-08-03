// src/components/MovieList.jsx – Fetch movies with Axios (GET)
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies when component loads
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // If you have a TMDB API key set in REACT_APP_TMDB_KEY, use TMDB, otherwise fallback
        const apiKey = process.env.REACT_APP_TMDB_KEY;
        const url = apiKey
          ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
          : "https://jsonplaceholder.typicode.com/posts"; // fallback for dev
        const response = await axios.get(url);
        const data = apiKey ? response.data.results : response.data;
        // Keep only first 5 titles
        const titles = data.slice(0, 5).map((item) => (apiKey ? item.title : item.title));
        setMovies(titles);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
      {movies.map((title, idx) => (
        <li key={idx}>{title}</li>
      ))}
    </ul>
  );
}

export default MovieList;
