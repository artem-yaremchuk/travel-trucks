import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const CamperDetail = lazy(() => import("../pages/Catalog/CamperDetail/CamperDetail"));
const Features = lazy(() => import("../pages/Catalog/Features/Features"));
const Reviews = lazy(() => import("../pages/Catalog/Reviews/Reviews"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:camperId" element={<CamperDetail />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
