// src/App.js
import './App.css';
import TrendingSong from './TrendingSong';

function App() {
  return (
    <div className="App">
      {/* Main heading of the application */}
      <h1>Welcome to My React Zomato App</h1>
      {/* Trending song component */}
      <TrendingSong />
    </div>
  );
}

export default App;
