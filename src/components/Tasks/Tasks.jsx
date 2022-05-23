import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todos, deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <>
   
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
       {todos}
       <Task deleteTodo={deleteTodo}/>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}

      </div>
    </>
  );
};

export default Tasks;
