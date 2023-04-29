import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index="/" element={<Home />}>
      {/* <Route path="dashboard" element={< />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
    <>
       <RouterProvider router={router} />
    <Home/>
</>
  );
}

export default App;
