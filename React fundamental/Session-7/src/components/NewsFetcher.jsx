import { useState, useEffect } from 'react';

// TASK 4 - Refactored Version
// Before: the fetch was inside a button click handler
// Now: moved the fetch into useEffect so data loads automatically

/*
  OLD CODE (before refactor):
  ============================
  function NewsFetcher() {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setNews(data.slice(0, 5));
        });
    };

    return (
      <div>
        <h2>📰 News Fetcher</h2>
        <button onClick={fetchNews}>Fetch News</button>
        <ul>
          {news.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
*/

// REFACTORED CODE (after moving fetch to useEffect)
function NewsFetcher() {
  const [news, setNews] = useState([]);

  // moved the fetch logic here so it runs on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.slice(0, 5));
      });
  }, []);

  // UI stays the same, button is still here but fetch happens automatically now
  return (
    <div>
      <h2>📰 News Fetcher</h2>
      <button style={{ padding: "8px 16px", cursor: "pointer" }}>
        Fetch News
      </button>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFetcher;
