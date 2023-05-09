
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Java from "./pages/Java";

import ThemeContext from "./context/ThemeContext";
import  { useContext } from 'react'
import Sign from "./pages/Sign";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <Html />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/Profile",
    element: <Java />,
  },
  {
    path: "/Signin",
    element: <Sign />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

function App() {
  const {Theme}=useContext(ThemeContext)
  return (
    <div className={`${Theme}`}>


<RouterProvider router={router} />
    </div>
   


  );
}

export default App;
