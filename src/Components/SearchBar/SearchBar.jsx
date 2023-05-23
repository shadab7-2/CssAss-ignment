import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResults }) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      .then((response) => response.json())
      .then((actualData) => {
        const results = actualData.states.filter((state) =>
          state.state_name && state.state_name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='Type to search...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
