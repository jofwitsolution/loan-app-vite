import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import UserOverview from "./dashboard/UserOverview";
import Signup from "./signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user/dashboard",
    element: <UserOverview />,
  },
]);

export default router;
