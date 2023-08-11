import { useEffect, useState } from "react";
import { Task } from "../reducers/taskReducer";

const useTasksSort = (tasks: Task[], sortOrder: boolean) => {
  const [sortedTasks, setSortedTasks] = useState([...tasks]);

  useEffect(() => {
    const updatedSortedTasks = [...tasks].sort((t1, t2) => {
      const task1 = t1.title.toLowerCase();
      const task2 = t2.title.toLowerCase();

      if (!sortOrder) {
        return task1.localeCompare(task2);
      } else {
        return task2.localeCompare(task1);
      }
    });
    setSortedTasks(updatedSortedTasks);
  }, [tasks, sortOrder]);

  return sortedTasks;
};

export default useTasksSort;
