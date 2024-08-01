import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./Data";
import Tours from "./Components/Tours";
function App() {
 const[tours,settours]=useState(Data);

function removetour(id)
{
  const newtours=tours.filter(tour=>tour.id!==id);
  settours(newtours); 
}

if(tours.length===0)
{
return(
  <div className='refresh'>
      <h2>No Tours Left</h2>
      <h2>Now It's Your Turn!!!</h2>
          <button className="white-btn" onClick={() => settours(Data)}>
            Refresh
          </button>
  </div>
);
}
  return (
    <div>
     
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  )
}

export default App;
