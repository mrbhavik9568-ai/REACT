import React from 'react';
import AiQuoteGenerator from './components/AiQuoteGenerator';
import ResumeSummaryForm from './components/ResumeSummaryForm';
import TestBlogSummary from './components/TestBlogSummary';
import './app.css';

export default function App() {
  return (
    <div className="container">
      <h1>Session 7 — AI API Integration</h1>
      <section>
        <h2>AiQuoteGenerator (Hugging Face)</h2>
        <AiQuoteGenerator />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Resume Summary (OpenAI)</h2>
        <ResumeSummaryForm />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Blog Summary Tester</h2>
        <TestBlogSummary />
      </section>
    </div>
  );
}
