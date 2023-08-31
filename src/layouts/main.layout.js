import React, { useContext } from "react";
import Header from "../components/shared-components/header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/shared-components/footer";
import { AuthContext } from "../context/authProvider";

const Main = () => {
  const navigate = useNavigate();
  // redirect to login page if user is not logged in
  const { user } = useContext(AuthContext);
  if (!user) {
    navigate("/");
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
