import React from "react";
import styles from "./tasks.module.css";
import data from "../../data/tasks.json"
import Task from "../Task/Task"

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((d)=>{return (<Task props={{d}} key={d.id}></Task>)})}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
