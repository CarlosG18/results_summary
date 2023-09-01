import Rating from './Rating.jsx'
import Button from './Button.jsx'

let titles = [
  'Reaction',
  'Memory',
  'Verbal',
  'Visual',
]

let values = [80,92,61,72]

function App() {
  return (
    <div className="flex items-center justify-center font-custom h-screen">
    
      <div className="rounded-md shadow-xl bg-white flex">
      
        <div className="flex flex-col justify-around items-center bg-Cobaltblue rounded-md w-64 p-6 text-white">
          <p>Your Result</p>
          <div className="flex flex-col items-center justify-center p-10 bg-black rounded-full">
            <p>76</p>
            <p>of 100</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Great</p>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        
        <div className="p-6">
          <p>Summary</p>
          <Rating title={titles[0]} value={values[0]} bg={"bg-Lightred"} />
          <Rating title={titles[1]} value={values[1]} bg={"bg-Orangeyellow"} />
          <Rating title={titles[2]} value={values[2]} bg={"bg-Greenteal"} />
          <Rating title={titles[3]} value={values[3]} bg={"bg-Cobaltblue"} />
          <Button value={"Continue"} />
        </div>
        
      </div>
    </div>
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
