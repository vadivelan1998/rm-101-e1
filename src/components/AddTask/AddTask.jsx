import React from "react";
import styles from "./addTask.module.css";
import data from "../../data/tasks.json";
import { useState } from "react";
const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [text,setText]=useState("")
  console.log(text)
  return (
    <div className={styles.todoForm}>
      <input onChange={(e)=>{setText(e.target.value)}} placeholder="Add Task..." data-testid="add-task-input" type="text" />
      <button onClick={()=>{
       
        data.push({
        id: 5,
        text: text,
        done: false,
        count: 1,
      });}} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
