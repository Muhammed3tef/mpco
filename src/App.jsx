import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivatbelServices from "./pages/privatelabelservices/privatelabelservices";
import InnovativeFormulations from "./pages/InnovativeFormulations/InnovativeFormulations";
import HomeCleaningProducts from "./pages/HomeCleaningProducts/HomeCleaningProducts";
import ContactUs from "./pages/ContactUs/ContactUs";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,children:[
      {path:"/", element:  <Home/>},
      {path:"/aboutus", element:  <AboutUs/>},
      {path:"/privatelabelservices", element:  <PrivatbelServices/>},
      {path:"/innovativeformulations", element:  <InnovativeFormulations/>},
      {path:"/homecleaningproducts", element:  <HomeCleaningProducts/>},
      {path:"/contactus", element:  <ContactUs/>},
      {path:"/moreinfo", element:  <MoreInfo/>},
      {path:"/termsandconditions", element:  <TermsAndConditions/>},
    ]
  },

]);

function App() {
  return (
    
    <RouterProvider router={router} />
    
  )
}

export default App
