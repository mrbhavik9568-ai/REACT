import React, { useState } from 'react';

export default function ResumeSummaryForm() {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSummary('');

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) throw new Error('Missing OpenAI API key (REACT_APP_OPENAI_API_KEY)');

      const prompt = `Summarize the following resume into 2 concise lines.\nName: ${name}\nExperience: ${experience}\nSkills: ${skills}\n\nSummary:`;

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 90,
          temperature: 0.6,
          n: 1
        })
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`OpenAI error: ${res.status} ${txt}`);
      }

      const data = await res.json();
      const text = data.choices[0].message.content;
      setSummary(text.trim());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="field-row">
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label>Experience</label>
        <textarea value={experience} onChange={(e) => setExperience(e.target.value)} required />
      </div>

      <div>
        <label>Skills (comma separated)</label>
        <input value={skills} onChange={(e) => setSkills(e.target.value)} required />
      </div>

      <div className="button-row">
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner" /> : 'Generate Summary'}
        </button>
      </div>

      {error && <div className="note" style={{ color: '#b91c1c' }}>{error}</div>}

      {summary && (
        <div className="result-box">
          <strong>Summary</strong>
          <p>{summary}</p>
        </div>
      )}
    </form>
  );
}
