import { useState, useRef } from 'react';

// AddToPlaylist - add songs to a list using useState and useRef
function AddToPlaylist() {
  const [song, setSong] = useState('');
  const [songs, setSongs] = useState([]);

  // ref to focus input after adding a song
  const inputRef = useRef(null);

  // add song to the playlist
  const handleAdd = () => {
    // dont add if input is empty
    if (song.trim() === '') return;

    // add song to the array
    setSongs([...songs, song]);

    // clear input
    setSong('');

    // focus back so user can type next song quickly
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>🎵 Add to Playlist</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {/* showing the playlist */}
      <ul>
        {songs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;
