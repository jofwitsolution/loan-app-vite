import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import UserOverview from "./dashboard/UserOverview";
import Signup from "./signup/Signup";
import ForgotPassword from "./forgot-password/ForgotPassword";
import ResetPassword from "./forgot-password/ResetPassword";
import AdminOverview from "./dashboard/AdminOverview";
import UserWithdraw from "./dashboard/UserWithdraw";

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
    path: "/user/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/user/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/user/dashboard",
    element: <UserOverview />,
  },
  {
    path: "/user/dashboard/withdraw",
    element: <UserWithdraw />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminOverview />,
  },
]);

export default router;
