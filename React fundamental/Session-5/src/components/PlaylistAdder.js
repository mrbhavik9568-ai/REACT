import React, { useState } from 'react';

// Task 4: PlaylistAdder - add songs to a playlist
function PlaylistAdder() {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  // songs is an array that holds all the added songs
  const [songs, setSongs] = useState([]);

  // add a new song to the list
  const handleAdd = (event) => {
    event.preventDefault();

    // dont add if fields are empty
    if (songName === '' || artist === '') {
      alert('Please fill both fields!');
      return;
    }

    // create a new song object and add it to the array
    const newSong = { name: songName, artist: artist };
    setSongs([...songs, newSong]);

    // clear inputs after adding
    setSongName('');
    setArtist('');
  };

  return (
    <div style={boxStyle}>
      <h3>🎵 Playlist Adder</h3>

      <form onSubmit={handleAdd}>
        <div style={{ marginBottom: '10px' }}>
          <label>Song Name: </label>
          <br />
          <input
            type="text"
            placeholder="Enter song name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Artist: </label>
          <br />
          <input
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={btnStyle}>
          Add to Playlist ➕
        </button>
      </form>

      {/* show the playlist below */}
      <div style={{ marginTop: '15px' }}>
        <h4>My Playlist ({songs.length} songs)</h4>
        {songs.length === 0 ? (
          <p style={{ color: '#999' }}>No songs added yet...</p>
        ) : (
          <ul style={{ paddingLeft: '20px' }}>
            {songs.map((song, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <strong>{song.name}</strong> - {song.artist}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  padding: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px',
  boxSizing: 'border-box',
};

const btnStyle = {
  backgroundColor: '#8e44ad',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 25px',
  fontSize: '15px',
  cursor: 'pointer',
  marginTop: '5px',
};

export default PlaylistAdder;
