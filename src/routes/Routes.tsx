import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Wrapper from "../layout/Wrapper";
import Register from "../pages/auth/Register";
import ProductbyId from "../pages/ProductbyId";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
       {
        path: "products/:id",
        element: <ProductbyId />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
