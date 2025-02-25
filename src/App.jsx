import React from "react";
import Home from "./Layout/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Routlayout from "./Component/Routlayout";
import Menu from "./Component/Menu";
import ContactPage from "./Component/ContactPage";
import About from "./Layout/About";
import BlogPart from "./Component/BlogPart";
import BlogDetails from "./Component/BlogDetails";
import AddToCartPage from "./Layout/AddToCartPage";
import Wishlist from "./Layout/Wishlist";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Routlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Pages" element={<BlogPart />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogDetails />} />
          <Route path="/AddToCart" element={<AddToCartPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
