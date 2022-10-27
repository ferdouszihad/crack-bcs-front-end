import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
