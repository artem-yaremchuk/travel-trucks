import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
};

export default Layout;
