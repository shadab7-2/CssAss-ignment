import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;
