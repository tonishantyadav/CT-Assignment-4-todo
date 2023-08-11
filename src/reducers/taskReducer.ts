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

interface ClearTask {
  type: "CLEAR";
}

export type TaskAction =
  | AddTask
  | DeleteTask
  | UpdateTask
  | SearchTask
  | ClearTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
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
    case "CLEAR":
      return [];
    default:
      return tasks;
  }
};

export default taskReducer;
