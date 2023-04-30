import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1>sory.....</h1>
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement:<h1>sory.....</h1>
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement:<h1>sory.....</h1>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

 
