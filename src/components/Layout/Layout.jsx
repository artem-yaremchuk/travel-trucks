import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
