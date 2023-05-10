
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Css from "./pages/Css";
import Profile from "./pages/Profile";

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
    path: "/About",
    element: <About />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/Profile",
    element: <Profile />,
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
