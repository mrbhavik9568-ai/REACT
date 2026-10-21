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
                    model: "gpt-4.1-mini",
                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                </div>
                <div style={{ marginTop: 8 }}>
                    <label>Experience</label>
                    <div>
                        <textarea value={experience} onChange={(e) => setExperience(e.target.value)} rows={4} required />
                    </div>
                </div>
                <div style={{ marginTop: 8 }}>
                    <label>Skills (comma separated)</label>
                    <div>
                        <input value={skills} onChange={(e) => setSkills(e.target.value)} required />
                    </div>
                </div>

                <div style={{ marginTop: 12 }}>
                    <button type="submit" disabled={loading}>
                        {loading ? <span className="spinner" /> : 'Generate 2-line Summary'}
                    </button>
                </div>
            </form>

            {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}

            {summary && (
                <div style={{ marginTop: 12 }}>
                    <strong>Summary:</strong>
                    <div>{summary}</div>
                </div>
            )}
        </div>
    );
}
