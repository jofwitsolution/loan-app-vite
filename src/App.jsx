import "./styles/globals.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./pages/routes";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
