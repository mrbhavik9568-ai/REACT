// src/components/CommentForm.jsx – Simple comment submit form using Axios POST
import React, { useState } from "react";
import axios from "axios";

function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse(null);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name: username,
          body: comment,
        }
      );
      setResponse(res.data);
      // Clear fields
      setUsername("");
      setComment("");
    } catch (err) {
      setError("Failed to submit comment. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Comment
          <textarea
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Comment</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && (
        <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc" }}>
          <p><strong>Response:</strong></p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
