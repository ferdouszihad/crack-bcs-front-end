import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainLayout from "../layouts/MainLayout";

const navRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: async () => {
          const data = await fetch("http://localhost:4000/courses");
          return data;
        },
        element: <Courses></Courses>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default navRouter;
