
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Java from "./pages/Java";

import ThemeContext from "./context/ThemeContext";
import  { useContext } from 'react'

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
    path: "/javascript",
    element: <Java />,
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
