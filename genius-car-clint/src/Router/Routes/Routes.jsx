import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Orders from "../../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../../Pages/Services/Services";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import AboutPage from "../../Pages/AboutPage/AboutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://genius-car-server-santo123457.vercel.app/services/${params.id}`
          );
        },
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
