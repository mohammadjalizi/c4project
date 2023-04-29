import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index="/" element={<Home />}>
      {/* <Route path="dashboard" element={< />} /> */}
      {/* ... etc. */}
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
