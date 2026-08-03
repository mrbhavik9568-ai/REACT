// App.jsx – a simple student project demonstrating Axios GET/POST, forms, and search filtering
import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddPlaylist from "./components/AddPlaylist";
import RestaurantSearch from "./components/RestaurantSearch";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <div className="container">
      <h1>Axios Demo Project</h1>
      <section className="card">
        <h2>Movie List (GET)</h2>
        <MovieList />
      </section>
      <section className="card">
        <h2>Add Playlist (POST)</h2>
        <AddPlaylist />
      </section>
      <section className="card">
        <h2>Restaurant Search (GET + Filter)</h2>
        <RestaurantSearch />
      </section>
      <section className="card">
        <h2>Comment Form (POST)</h2>
        <CommentForm />
      </section>
    </div>
  );
}

export default App;
