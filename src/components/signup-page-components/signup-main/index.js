import React, { useContext } from "react";
import logo from "../../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../assets/img/google.png";
import { AuthContext } from "../../../context/authProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUpMain = () => {
  const navigate = useNavigate();
  const { providerLogin, setError, createUser } =
    useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Account Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
  };
  return (
    <div className="py-[50px] w-full">
      <div className="container">
        <div className="form-container">
          <div className="text-center bg-[#164B60] p-5 mb-5">
            <img src={logo} className="logo m-auto" alt="" />
          </div>
          <form action="" className="form" onSubmit={handleSignUp}>
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
                Sign Up
              </button>
            </div>

            <div className="text-center">
              Already Have an Account? &nbsp;
              <Link to="/" className="text-[#164B60]">
                Login
              </Link>
            </div>

            {/* google login */}
          </form>

          <div className="relative">
            <hr className="mt-[30px]" />
            <span className="absolute bg-white top-[50%] left-[50%] lh-1 translate-x-[-50%] translate-y-[-50%] block px-4">
              or
            </span>
          </div>
          <div className="text-center mt-[30px]">
            <button
              onClick={handleGoogleSignIn}
              className="bg-[#164B60] text-[#fff] p-[15px] text-xl rounded-[5px] w-full flex gap-2  justify-center items-center"
            >
              Login with Google <img src={google} className="google" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMain;
