import { Link } from "react-router-dom";

// import * as React from "react";
export default function Start() {
  return (
    <div className="flex flex-col justify-center bg-white shadow-sm">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-96 mb-52 max-w-full w-[666px] max-md:my-10">
          <div className="text-7xl text-center text-white max-md:max-w-full max-md:text-4xl">
            Welcome , User
          </div>
          <div className="justify-center items-center px-16 py-8 mt-14 text-4xl whitespace-nowrap bg-green-600 rounded-[30px] text-black text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <Link to="/HomeScreen">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


