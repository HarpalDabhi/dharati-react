// import * as React from "react";

import { Link } from "react-router-dom"

export default function HomeScreen() {
    
    return (
    <div className="flex flex-col justify-center text-center bg-white">
      <div className="flex overflow-hidden relative flex-col pt-5 pr-14 pb-12 w-full min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-0 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className=" text-7xl text-green-900 max-md:text-4xl">
            Dharati
          </div>
          <div className="flex gap-5 justify-between items-start self-end mt-10 text-3xl text-green-950 text-opacity-90 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="grow text-neutral-400">Home</div>
            <Link to="/AboutScreen" className="flex-auto">About Us</Link>
            <Link to="/Categories" className="flex-auto self-stretch">Categories</Link>
            <Link to="/Assesories" className="flex-auto">Assesories</Link>
            <Link to="/PriceScreen" className="flex-auto">Price</Link>
            <Link to="/Vlog" className="flex-auto">Vlog</Link>
            <Link to="/Help" className="flex-auto">Help</Link>
          </div>
        </div>
        <div className="flex relative flex-col items-start self-center mt-72 mb-64 w-full max-w-[1013px] max-md:my-10 max-md:max-w-full">
          <div className="ml-12 text-5xl text-white max-md:max-w-full max-md:text-4xl">
            Explore a vast collection of
          </div>
          <div className="self-stretch mt-3 text-6xl text-black max-md:max-w-full max-md:text-4xl">
            Vibrant and Thriving Plants Grotwth
          </div>
          <div className="justify-center items-center px-16 py-8 mt-3 ml-12 max-w-full text-4xl text-lime-400 whitespace-nowrap bg-green-800 rounded-[50px] w-[411px] max-md:px-5 max-md:ml-2.5">
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
}


