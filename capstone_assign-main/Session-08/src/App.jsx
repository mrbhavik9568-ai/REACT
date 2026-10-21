import React from 'react';
import AiQuoteGenerator from './components/AiQuoteGenerator';
import ResumeSummaryForm from './components/ResumeSummaryForm';
import TestBlogSummary from './components/TestBlogSummary';
import './app.css';

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <div>
          <p className="eyebrow">Session 8 — Responsive Design & Testing</p>
          <h1>AI App Demo</h1>
          <p className="intro">A responsive React demo for mobile, tablet, and desktop testing.</p>
        </div>
      </header>

      <section>
        <h2>Quote Generator</h2>
        <AiQuoteGenerator />
      </section>

      <section>
        <h2>Resume Summary</h2>
        <ResumeSummaryForm />
      </section>

      <section>
        <h2>Blog Summary</h2>
        <TestBlogSummary />
      </section>
    </div>
  );
}
