import TrendingSongs from './components/TrendingSongs';
import IPLScoreFetcher from './components/IPLScoreFetcher';
import MovieSuggestions from './components/MovieSuggestions';
import NewsFetcher from './components/NewsFetcher';
import './App.css';

// main app - showing all 4 components
function App() {
  return (
    <div className="app">
      <h1>Session 6 - useEffect Practice</h1>

      <div className="card">
        <TrendingSongs />
      </div>

      <div className="card">
        <IPLScoreFetcher />
      </div>

      <div className="card">
        <MovieSuggestions />
      </div>

      <div className="card">
        <NewsFetcher />
      </div>
    </div>
  );
}

export default App;
