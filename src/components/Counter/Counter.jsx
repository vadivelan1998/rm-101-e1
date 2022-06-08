import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";
const Counter = ({props}) => {
  // sample value to be replaced
  //console.log(props)
  function handle(val){
setCount(count+val)
  }
  const [count,setCount]=useState(props)
  //let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=>{handle(1)}} data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button onClick={()=>{handle(-1)}}data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
