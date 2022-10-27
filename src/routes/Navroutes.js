import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const navRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "courses",
        loader: async () => {
          const data = await fetch("http://localhost:4000/courses");
          return data;
        },
        element: <Courses></Courses>,
      },
      {
        path: "/",
        loader: async () => {
          const data = await fetch("http://localhost:4000/courses");
          return data;
        },
        element: <Courses></Courses>,
      },
      {
        path: "courses/:cId",
        loader: async ({ params }) => {
          const data = await fetch(
            `http://localhost:4000/courses/${params.cId}`
          );
          return data;
        },
        element: <CourseDetail> </CourseDetail>,
      },
      {
        path: "checkout/:cId",
        loader: async ({ params }) => {
          const data = await fetch(
            `http://localhost:4000/courses/${params.cId}`
          );
          return data;
        },
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
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
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default navRouter;
