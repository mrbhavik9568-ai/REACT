import { useState, useEffect } from 'react';

// this component fetches users and shows them as movie suggestions
function MovieSuggestions() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  // show loading text while fetching
  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div>
      <h2>🎬 Movie Suggestions</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSuggestions;
