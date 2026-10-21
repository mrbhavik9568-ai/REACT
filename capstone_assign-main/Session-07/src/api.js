// Helper functions for OpenAI and Hugging Face usage
export async function fetchBlogSummary(prompt) {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) throw new Error('Missing OpenAI API key (REACT_APP_OPENAI_API_KEY)');

    const body = {
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "user",
                content: `Provide a succinct blog summary (2-3 sentences) for the following prompt:\n\n${prompt}`
            }
        ],
        max_tokens: 120
    };

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`OpenAI error: ${res.status} ${txt}`);
    }

   const data = await res.json();

return data.choices[0].message.content;
}
