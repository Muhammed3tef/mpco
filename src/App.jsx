import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Load from "./components/Load/Load";
import Layout from "./Layout/Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const PrivatbelServices = lazy(() => import("./pages/privatelabelservices/privatelabelservices"));
const InnovativeFormulations = lazy(() => import("./pages/InnovativeFormulations/InnovativeFormulations"));
const HomeCleaningProducts = lazy(() => import("./pages/HomeCleaningProducts/HomeCleaningProducts"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const MoreInfo = lazy(() => import("./pages/MoreInfo/MoreInfo"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/privatelabelservices", element: <PrivatbelServices /> },
      { path: "/innovativeformulations", element: <InnovativeFormulations /> },
      { path: "/homecleaningproducts", element: <HomeCleaningProducts /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/moreinfo", element: <MoreInfo /> },
      { path: "/termsandconditions", element: <TermsAndConditions /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Load />}>
      <RouterProvider router={router} />
    </Suspense>
    // <Load/>
  );
}

export default App;
