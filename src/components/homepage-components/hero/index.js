import React from "react";

const Hero = () => {
  return (
    <div className="md:py-[200px] py-[50px] hero">
      <div className="container">
        <div className="text-center">
          <h1 className="text-[#fff] md:text-7xl text-3xl font-bold ops">
            Hello, Welcome to VR-HUB
          </h1>
          <p className="text-[#fff] md:text-2xl font-bold mt-3 ops">
            VR Corner is a platform for VR enthusiasts to learn, share and grow
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
