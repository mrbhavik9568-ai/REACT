import { useState, useEffect } from 'react';

// this component fetches IPL match headline from API
function IPLScoreFetcher() {

  const [headline, setHeadline] = useState("");

  // fetch data when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // just take the first post title as headline
        setHeadline(data[0].title);
      });
  }, []);

  return (
    <div>
      <h2>🏏 IPL Score Fetcher</h2>
      <p><strong>Current Match Headline:</strong></p>
      <p>{headline ? headline : "Loading headline..."}</p>
    </div>
  );
}

export default IPLScoreFetcher;
