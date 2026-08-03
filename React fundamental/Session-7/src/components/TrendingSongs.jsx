import { useEffect } from 'react';

// this component just shows trending songs heading
// useEffect runs when component loads for the first time
function TrendingSongs() {

  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty array means run only once

  return (
    <div>
      <h2>🎵 Trending Songs</h2>
      <p>Welcome to the trending songs section!</p>
      <ul>
        <li>Song 1 - Tum Hi Ho</li>
        <li>Song 2 - Kesariya</li>
        <li>Song 3 - Apna Bana Le</li>
        <li>Song 4 - Raataan Lambiyan</li>
        <li>Song 5 - Pasoori</li>
      </ul>
    </div>
  );
}

export default TrendingSongs;
