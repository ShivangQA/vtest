import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DetailReview = React.lazy(() => import("pages/DetailReview"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const BlogDetail = React.lazy(() => import("pages/BlogDetail"));
const ShopDetailDescription = React.lazy(
  () => import("pages/ShopDetailDescription"),
);
const Shop = React.lazy(() => import("pages/Shop"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Cart = React.lazy(() => import("pages/Cart"));
const Blog = React.lazy(() => import("pages/Blog"));
const Team = React.lazy(() => import("pages/Team"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shopdetaildescription"
            element={<ShopDetailDescription />}
          />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/detailreview" element={<DetailReview />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
