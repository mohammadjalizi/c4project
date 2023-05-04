
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Java from "./pages/Java";



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
  return (
   

<RouterProvider router={router} />

  );
}

export default App;
