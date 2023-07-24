import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])
export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
} 
