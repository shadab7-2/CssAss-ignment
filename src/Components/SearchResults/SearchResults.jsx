import React from 'react';
import "./SearchResults.css";
import Result from '../Results/Results';

function SearchResults({ results }) {
  return (
    <div className='results-list'>
      {results.map((result, id) => (
        <Result key={id} result={result} />
      ))}
    </div>
  );
}

export default SearchResults;
