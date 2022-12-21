import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import navRouter from "./routes/Navroutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <RouterProvider router={navRouter}></RouterProvider>
    </div>
  );
}

export default App;
