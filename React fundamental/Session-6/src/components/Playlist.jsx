import React from 'react';

// Playlist component receives an array of song objects via props
// Each song has a title and an artist
function Playlist({ songs }) {
  // Display all songs using map
  return (
    <div className="component">
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} – {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
