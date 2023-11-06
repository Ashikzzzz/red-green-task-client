import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import CreateNewList from "../components/CreateNewList";
import CreateNewTask from "../components/CreateNewTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create-new-list",
        element: <CreateNewList></CreateNewList>,
      },
      {
        path: "/create-new-task",
        element: <CreateNewTask></CreateNewTask>,
      },
    ],
  },
]);
