import React from 'react'
import './Result.css'
function Result(props) {
  return (
    <div className='result'>
        <h4>Your Score: {props.score}</h4>
        <h3>Maximum Score: 20</h3>
      
    </div>
  )
}

export default Result
