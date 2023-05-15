import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Orders from "../../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path :"/",
      element : <MainPage></MainPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
        },
        {
            path : '/login',
            element :<Login></Login>,
        },
        {
            path : '/signup',
            element :<SignUp></SignUp>,
        },
        {
          path : '/checkout/:id',
          element :<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader : ({params})=>{
           return fetch(`http://localhost:5000/services/${params.id}`)
          }
      },
      {
        path : "/orders",
        element : <PrivateRoute><Orders></Orders></PrivateRoute>
      }
      ]
  
    }
  ])
  export default router;