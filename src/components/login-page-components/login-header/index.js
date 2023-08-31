import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";

const LoginHeader = () => {
  return (
    <div className="bg-[#164B60]">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} className="logo" alt="" />
          </Link>
          <Link to={"/register"} className="bg-[#3691C8] text-[#fff] px-10 pt-2 pb-3 text-xl font-bold rounded-[5px]">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
