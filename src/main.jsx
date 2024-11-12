import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import EmptyCart from "./pages/EmptyCart.jsx";
import Cart from "./pages/Cart.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";

import TandC from "./pages/TandC.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import UserAccount from "./pages/UserAccount.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import EmptyCart from "./pages/EmptyCart.jsx";

const router = createBrowserRouter([
  {
    path: "/Deeya-Website/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "Deeya-Website/",
        element: <Home />,
      },
      {
        path: "/Deeya-Website/aboutus",
        element: <AboutPage />,
      },
      {
        path: "/Deeya-Website/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/Deeya-Website/marketplace/:id",
        element: <ProductDetails />,
      },
      {
        path: "/Deeya-Website/blog",
        element: <Blog />,
        path: "/Deeya-Website/contactus",
        element: <ContactPage />,
      },
      {
        path: "/Deeya-Website/login",
        element: <LoginPage />,
      },
      {
        path: "/Deeya-Website/register",
        element: <Register />,
      },
      {
        path: "/Deeya-Website/tc",
        element: <TandC />,
      },
      {
        path: "/Deeya-Website/reset",
        element: <ResetPassword />,
      },
      {
        path: "/Deeya-Website/account",
        element: <UserAccount />,
      },
      {
        path: "/Deeya-Website/blog",
        element: <Blog />,
      },
      {
        path: "/Deeya-Website/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/Deeya-Website/emptycart/",
        element: <EmptyCart />,
      },
      {
        path: "/Deeya-Website/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
