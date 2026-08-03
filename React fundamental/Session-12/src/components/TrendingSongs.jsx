import React, { useState, useEffect } from 'react';

// TrendingSongs component fetches posts and displays first 3 titles.
function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      // Fetch data when component loads
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // Check if response is successful
      if (!response.ok) throw new Error('Failed to load');
      const data = await response.json();
      // Keep only first 3 posts
      setSongs(data.slice(0, 3));
    } catch (err) {
      // Show error message if request fails
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <h2 className="title">Trending Songs (Posts)</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {!loading && !error && (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}
      {/* Retry API call */}
      <button onClick={fetchData}>Reload</button>
    </div>
  );
}

export default TrendingSongs;
