import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayOut;
