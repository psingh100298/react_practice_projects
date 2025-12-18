import { useState } from "react";

const counterAction = {
  INC: 'increase',
  DEC: 'decrease',
  RESET: 'reset'
} as const;

const App = () =>{

  const [counter, setCounter] = useState<number>(0);

  const handleClick = (value:string)=>{
    if(value===counterAction.INC){
      setCounter(prev=> prev+1);
    }else if(value === counterAction.DEC){
      setCounter(prev=> prev-1);
    }else if(value === counterAction.RESET){
      setCounter(0);
    }
  }
return(
  <>
  <div className="min-h-screen flex justify-center">
    <div className="flex flex-col items-center gap-4 max-w-3xl w-full px-4">
      <div className="text-red-500 flex justify-center items-center p-2 text-2xl border-2 border-amber-600 w-full">
        <h1>Counter App</h1>
      </div>
      <div>
       <h1>Current count is: {counter}</h1>
      </div>
      <div className="flex gap-4 w-full">
        <button className="flex-1 border-2 bg-amber-300 hover:bg-amber-500 cursor-pointer py-1" onClick={()=> handleClick('increase')}>
          Increase
        </button>
        <button className="flex-1 border-2 bg-amber-300 hover:bg-amber-500 cursor-pointer py-1" onClick={()=> handleClick('decrease')}>
          Decrease
        </button>
        <button className="flex-1 border-2 bg-amber-300 hover:bg-amber-500 cursor-pointer py-1" onClick={()=> handleClick('reset')}>
          Reset
        </button>
      </div>

    </div>
  </div>
</>


)
}


export default App;