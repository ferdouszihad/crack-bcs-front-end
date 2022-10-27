import { RouterProvider } from "react-router-dom";
import "./App.css";
import navRouter from "./routes/Navroutes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={navRouter}></RouterProvider>
    </div>
  );
}

export default App;
