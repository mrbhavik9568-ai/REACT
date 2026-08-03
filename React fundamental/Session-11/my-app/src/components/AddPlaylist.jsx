// src/components/AddPlaylist.jsx – Simple controlled form with Axios POST
import React, { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: playlistName,
          body: description,
        }
      );
      // jsonplaceholder returns the posted object with an id
      setMessage("Playlist created successfully!");
      // Clear the form fields
      setPlaylistName("");
      setDescription("");
      console.log("POST response", response.data);
    } catch (err) {
      setError("Failed to create playlist. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Playlist Name
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Playlist</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AddPlaylist;
