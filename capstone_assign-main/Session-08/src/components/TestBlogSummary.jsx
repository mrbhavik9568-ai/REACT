import React, { useState } from 'react';
import { fetchBlogSummary } from '../api';

export default function TestBlogSummary() {
  const [prompt, setPrompt] = useState('Explain benefits of remote work for companies.');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function run() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const r = await fetchBlogSummary(prompt);
      setResult(r);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="field-row">
      <div>
        <label>Blog Prompt</label>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </div>

      <div className="button-row">
        <button onClick={run} disabled={loading}>
          {loading ? <span className="spinner" /> : 'Get Blog Summary'}
        </button>
        <button
          type="button"
          onClick={() => setPrompt('A short how-to on improving sleep hygiene for busy professionals.')}
        >
          Load Example
        </button>
      </div>

      {error && <div className="note" style={{ color: '#b91c1c' }}>{error}</div>}

      {result && (
        <div className="result-box">
          <strong>Summary</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
