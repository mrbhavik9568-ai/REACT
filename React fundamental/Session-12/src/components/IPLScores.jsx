import React, { useState, useEffect } from 'react';

// IPLScores component fetches users and displays their names as dummy scores.
function IPLScores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchScores = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // Ensure the response is OK
      if (!response.ok) throw new Error('Failed to load scores');
      const data = await response.json();
      setScores(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="card">
      <h2 className="title">IPL Scores (Users)</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading scores</p>}
      {!loading && !error && (
        <ul>
          {scores.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IPLScores;
