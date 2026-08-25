import React, { Suspense } from "react";
import SideNavbar from "./components/SideNavbar";
import Bottombar from "./components/Bottombar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Community = React.lazy(() => import("./Pages/Community"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Login = React.lazy(() => import("./Pages/Login"));
const Payment = React.lazy(() => import("./Pages/Payment"));
const Privacy = React.lazy(() => import("./Pages/Privacy"));
const Product = React.lazy(() => import("./Pages/Product"));
const Search = React.lazy(() => import("./Pages/Search"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const ShopPage = React.lazy(() => import("./Pages/ShopPage"));

function AppRoutes() {
  const location = useLocation();

  const hideBottomBarRoutes = ["/login", "/payment"];
  const shouldHideBottomBar = hideBottomBarRoutes.includes(location.pathname);

  return (
    <>
      <Suspense fallback={<div>loading ....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shoppage/:id" element={<ShopPage />} />
        </Routes>
      </Suspense>

      {!shouldHideBottomBar && <Bottombar />}
    </>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
