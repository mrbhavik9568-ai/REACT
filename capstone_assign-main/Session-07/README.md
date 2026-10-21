# AI API Integration Demo

Quick demo app for Session 7 showing:
- `AiQuoteGenerator` using Hugging Face Inference API (gpt2)
- `ResumeSummaryForm` using OpenAI `/completions` endpoint
- `fetchBlogSummary(prompt)` helper and a small test component

Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with your API keys:

```
REACT_APP_OPENAI_API_KEY=sk-...
REACT_APP_HF_API_KEY=hf_...
```

3. Start the dev server:

```bash
npm start
```

Notes

- The app uses `fetch()` for both Hugging Face and OpenAI calls.
- `AiQuoteGenerator` demonstrates prompt-tuning via a `tone` selector.
- `ResumeSummaryForm` shows loading spinner and error handling for OpenAI calls.
