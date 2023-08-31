import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#164B60] py-3">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="">
            <Link to="/main/vr-corner">
              <img src={logo} className="logo" alt="" />
            </Link>
          </div>

          <div className="menu md:flex grid justify-end items-center grid-cols-2 md:mt-0 mt-6 gap-5">
            <NavLink
              to="/main/vr-corner"
              className="text-[#fff] md:text-[16px] text-[13px]"
            >
              VR CORNER
            </NavLink>
            <NavLink
              to="/main/vr-education"
              className="text-[#fff] md:text-[16px] text-[13px]"
            >
              VR Education Hub
            </NavLink>
            <NavLink
              to="/main/community"
              className="text-[#fff] md:text-[16px] text-[13px]"
            >
              Community
            </NavLink>
            <NavLink
              to="/main/vr-career"
              className="text-[#fff] md:text-[16px] text-[13px]"
            >
              VR Career Hub
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
