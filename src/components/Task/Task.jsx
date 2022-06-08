import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({props}) => {
  // NOTE: do not delete `data-testid` key value pair
  const {id,text,done,count}=props.d
  return (
    <li data-testid="task" className={styles.task}>
      <input  type="checkbox" data-testid="task-checkbox" />
      <div style={{}} data-testid="task-text">{text}</div>
      {/* Counter here */}
      <Counter props={count}/>
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
