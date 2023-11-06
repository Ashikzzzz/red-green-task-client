import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import CreateNewList from "../components/CreateNewList";
import CreateNewTask from "../components/CreateNewTask";
import EditList from "../components/EditList";
import EditTask from "../components/EditTask";

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
      {
        path: "/edit-list",
        element: <EditList></EditList>,
      },
      {
        path: "/edit-task",
        element: <EditTask></EditTask>,
      },
    ],
  },
]);
