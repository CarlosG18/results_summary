import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="bg-green-800 text-Lightred font-custom">Your Result</p>
      
      76
      of 100

      Great
      You scored higher than 65% of the people who have taken these tests.
  
      Summary

      Reaction
      80 / 100

      Memory
      92 / 100

      Verbal
      61 / 100

      Visual
      72 / 100

      Continue
    </>
  )
}

export default App

/*
<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
  
  .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  
*/
