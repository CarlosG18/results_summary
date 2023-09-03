import Rating from './Rating.jsx'
import Button from './Button.jsx'
import Memory from './assets/images/icon-memory.svg'
import Reaction from './assets/images/icon-reaction.svg'
import Verbal from './assets/images/icon-verbal.svg'
import Visual from './assets/images/icon-visual.svg'
import './App.css'

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
    
      <div className="rounded-[30px] shadow-2xl bg-white flex">
      
        <div className="flex flex-col justify-around gap-5 items-center linear-gradient rounded-[30px] p-10 text-white">
          <p className=" text-Lightlavender">Your Result</p>
          <div className="flex flex-col items-center justify-center h-40 w-40 linear-gradient-inverse rounded-full">
            <p className="text-[60px] font-bold">76</p>
            <p className="text-Lightlavender">of 100</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] mb-3 font-bold">Great</p>
            <p className="text-center text-Lightlavender max-w-[250px]">You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        
        <div className="p-6 flex flex-col justify-around">
          <p>Summary</p>
          <Rating title={titles[0]} value={values[0]} bg={"bg-red_light"} img={Reaction} color={"text-Lightred"}/>
          <Rating title={titles[1]} value={values[1]} bg={"bg-yellow_light"} img={Memory} color={"text-Orangeyellow"} />
          <Rating title={titles[2]} value={values[2]} bg={"bg-green_light"} img={Verbal} color={"text-Greenteal"}/>
          <Rating title={titles[3]} value={values[3]} bg={"bg-violet_light"} img={Visual} color={"text-Cobaltblue"}/>
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
