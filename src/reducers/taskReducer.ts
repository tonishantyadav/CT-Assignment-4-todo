import defaultTasks from "../data/tasks";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskID: number;
}

interface UpdateTask {
  type: "UPDATE";
  taskID: number;
  taskTitle: string;
}

interface SearchTask {
  type: "SEARCH";
  taskTitle: string;
}

export type TaskAction = AddTask | DeleteTask | UpdateTask | SearchTask;

const taskReducer = (
  tasks: Task[] = defaultTasks,
  action: TaskAction
): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskID);
    case "UPDATE":
      return tasks.map((task) =>
        task.id === action.taskID ? { ...task, title: action.taskTitle } : task
      );
    case "SEARCH":
      return tasks.filter((task) => task.title === action.taskTitle);
    default:
      return tasks;
  }
};

export default taskReducer;
