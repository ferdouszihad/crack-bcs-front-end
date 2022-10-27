import { RouterProvider } from "react-router-dom";
import "./App.css";
import navRouter from "./routes/Navroutes";

function App() {
  return (
    <div>
      <RouterProvider router={navRouter}></RouterProvider>
    </div>
  );
}

export default App;
