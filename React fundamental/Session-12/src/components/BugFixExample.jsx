import React, { useState, useEffect } from 'react';
import './BugFixExample.css';

/*
  BugFixExample demonstrates fixing a common fetch mistake.
  The original buggy code used .then() without checking response.ok.
  Here we rewrite it using async/await, try/catch, and response.ok checking.
*/
function BugFixExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalidurl');
      // response.ok is false for non‑200 responses
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Run once when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <h2 className="bugfix-title">Bug Fix Example</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {/* Allow user to retry the request */}
      <button onClick={fetchData}>Retry</button>
    </div>
  );
}

export default BugFixExample;
