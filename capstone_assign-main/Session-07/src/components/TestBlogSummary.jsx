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
    <div>
      <div>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={run} disabled={loading}>{loading ? <span className="spinner" /> : 'Get Blog Summary'}</button>
        <button style={{ marginLeft: 8 }} onClick={() => setPrompt('A short how-to on improving sleep hygiene for busy professionals.')}>
          Load Example 2
        </button>
      </div>

      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      {result && (
        <div style={{ marginTop: 12 }}>
          <strong>Summary:</strong>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}
