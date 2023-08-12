import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import TasksListPage from "./Pages/TasksListPage";

const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/tasks", element: <TasksListPage /> },
]);

export default router;
