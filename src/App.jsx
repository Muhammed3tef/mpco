import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,children:[
      {path:"/", element:  <Home/>},
      {path:"/aboutus", element:  <AboutUs/>},
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
