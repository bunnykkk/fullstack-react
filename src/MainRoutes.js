import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 9,
    },
    {
      link: "/favorite",
      element: <FavoritePage />,
      id: 10,
    },
    {
      link: "/about",
      element: <AboutPage />,
      id: 11,
    },
    {
      link: "/services",
      element: <ServicesPage />,
      id: 12,
    },
    {
      link: "/team",
      element: <TeamPage />,
      id: 13,
    },
    {
      link: "/contact",
      element: <ContactPage />,
      id: 14,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
