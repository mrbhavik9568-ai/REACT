import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import AddToPlaylist from './components/AddToPlaylist';
import FeedbackForm from './components/FeedbackForm';
import './App.css';

// main app - showing all 4 useRef components
function App() {
  return (
    <div className="app">
      <h1>Session 8 - useRef Practice</h1>

      <div className="card">
        <SearchBar />
      </div>

      <div className="card">
        <LoginForm />
      </div>

      <div className="card">
        <AddToPlaylist />
      </div>

      <div className="card">
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
