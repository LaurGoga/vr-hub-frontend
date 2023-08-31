import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-[#164B60]">
      <div className="container">
        <div className="text-center">
          <img src={logo} className="logo m-auto" alt="" />

          <div className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
            <Link to="/main" className="text-[#fff]">
              VR CORNER
            </Link>
            <Link to="/main/vr-education" className="text-[#fff]">
              VR Education Hub
            </Link>
            <Link to="/main/community" className="text-[#fff]">
              Community
            </Link>
            <Link to="/main/vr-career" className="text-[#fff]">
              VR Career Hub
            </Link>
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            <Link to="/main" className="text-[#fff]">
              <FaFacebook className="text-3xl" />
            </Link>
            <Link to="/main" className="text-[#fff]">
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link to="/main" className="text-[#fff]">
              <FaYoutube className="text-3xl" />
            </Link>
            <Link to="/main" className="text-[#fff]">
              <FaInstagram className="text-3xl" />
            </Link>
            <Link to="/main" className="text-[#fff]">
              <FaTwitter className="text-3xl" />
            </Link>
          </div>
          <hr className="mt-5" />
          <p className="mt-5 text-white text-sm">
            © 2023 VR Hub. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
