import { ReactNode, useContext, useReducer } from "react";
import TaskContext from "./contexts/taskContext";
import defaultTasks from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

interface Props {
  children: ReactNode;
}

export const useTask = () => useContext(TaskContext);

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, defaultTasks);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
