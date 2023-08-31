import React from "react";
import logo from "../../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const AdminLoginMain = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    fetch("https://vr-hub-server.vercel.app/api/v1/adminLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Login Successfully");
          navigate("/admin/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      });
  };

  return (
    <div className="py-[50px] w-full">
      <div className="container">
        <div className="form-container">
          <div className="text-center bg-[#164B60] p-5 mb-5">
            <img src={logo} className="logo m-auto" alt="" />
            <h2>
              <span className="text-[#fff]">Admin Login</span>
            </h2>
          </div>
          <form action="" className="form" onSubmit={handleLogin}>
            <div className="mb-[30px]">
              <label htmlFor="email" className="block mb-[10px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="false"
                className="w-full border-[1px] border-[#164B60] rounded-[5px] p-[10px] outline-none focus:border-[#4FC0D0]"
              />
            </div>
            <div className="mb-[30px]">
              <label htmlFor="password" className="block mb-[10px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="false"
                className="w-full border-[1px] border-[#164B60] rounded-[5px] p-[10px] outline-none focus:border-[#4FC0D0]"
              />
            </div>
            <div className="mb-[30px]">
              <button
                type="submit"
                className="bg-[#164B60] text-[#fff] p-[15px] text-xl block rounded-[5px] w-full"
              >
                Login as Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginMain;
