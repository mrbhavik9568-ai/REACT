import React, { useState } from 'react';

export default function AiQuoteGenerator() {
  const [tone, setTone] = useState('inspirational');
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchQuote() {
    setLoading(true);
    setError(null);
    setQuote('');

    try {
      const hfKey = process.env.REACT_APP_HF_API_KEY;
      if (!hfKey) throw new Error('Missing Hugging Face API key (REACT_APP_HF_API_KEY)');

      const prompt = `Generate a short, ${tone} motivational quote.`;

      const res = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${hfKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: prompt })
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Hugging Face error: ${res.status} ${text}`);
      }

      const data = await res.json();
      let generated = '';
      if (Array.isArray(data)) {
        generated = data[0]?.generated_text || data[0]?.text || '';
      } else {
        generated = data.generated_text || data.text || '';
      }

      setQuote(generated.trim());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="field-row">
      <label>
        Tone
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="inspirational">Inspirational</option>
          <option value="serious">Serious</option>
          <option value="funny">Funny</option>
          <option value="melancholic">Melancholic</option>
        </select>
      </label>

      <div className="button-row">
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? <span className="spinner" /> : 'Get Quote'}
        </button>
      </div>

      {error && <div className="note" style={{ color: '#b91c1c' }}>{error}</div>}

      {quote && (
        <div className="blockquote-box">
          <blockquote>{quote}</blockquote>
        </div>
      )}
    </div>
  );
}
