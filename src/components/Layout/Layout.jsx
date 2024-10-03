import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";

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
