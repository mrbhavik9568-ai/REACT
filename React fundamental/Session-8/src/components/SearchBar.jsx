import { useRef, useEffect } from 'react';

// SearchBar component - practicing useRef to focus input
function SearchBar() {
  // creating a ref for the input element
  const inputRef = useRef(null);

  // auto focus the input when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // simple search handler
  const handleSearch = () => {
    alert('Searching for: ' + inputRef.current.value);
  };

  return (
    <div>
      <h2>🔍 Search Bar</h2>
      <input type="text" ref={inputRef} placeholder="Search here..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
