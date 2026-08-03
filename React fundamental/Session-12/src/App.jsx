import React from 'react';
import './App.css';
import TrendingSongs from './components/TrendingSongs';
import IPLScores from './components/IPLScores';
import BugFixExample from './components/BugFixExample';

function App() {
  return (
    <div className="app">
      <h1>React API Demo</h1>
      <TrendingSongs />
      <IPLScores />
      <BugFixExample />
    </div>
  );
}

export default App;
