// src/components/RestaurantSearch.jsx – Fetch mock restaurants and filter by name
import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch restaurant data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using jsonplaceholder users as mock restaurant data
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // Each user has a "name" field – treat it as restaurant name
        setRestaurants(response.data);
      } catch (err) {
        setError("Failed to load restaurants.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter restaurants based on search input (case‑insensitive)
  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No restaurants found</p>
      ) : (
        <ul>
          {filtered.map((r) => (
            <li key={r.id}>{r.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RestaurantSearch;
