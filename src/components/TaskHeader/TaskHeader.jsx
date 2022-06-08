import React from "react";
import styles from "./taskHeader.module.css";
import data from "../../data/tasks.json";
const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = data.length
  let unCompletedTask = data.filter((e) => e.done == false).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You Have <b data-testid="header-remaining-task">{unCompletedTask}</b>  of   <b data-testid="header-total-task">{totalTask}</b> Tasks Remaining
    </div>
  );
};

export default TaskHeader;
