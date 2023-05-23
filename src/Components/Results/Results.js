import React from 'react';
import "./Results.css";

function Result({ result }) {
  return (
    <div className='search-results'>
        <button className='result-button' > {result.state_name}</button>
      
    </div>
  );
}

export default Result;
