
import { Button } from './Button';
import { useState } from 'react';


export function Counter(){

  const [state,setState] = useState(0);
  const [a,setA] = useState(5);
  
  function onIncrementClick(){
    // console.log("increment ",state)
    // value = value + 1;
    setState((v)=>v+1);
  }

  function onDecrementClick(){
    // console.log("decrement ", state);
    // value = value - 1;
    setState((v)=>v-1);
  }

  return (
    <div className="counter-container">
      <Button text={"-"} onClick={onDecrementClick} />
      <h4 className="count" > {state} </h4>
      <Button text={"+"} onClick={onIncrementClick} />
    </div>
  )
}