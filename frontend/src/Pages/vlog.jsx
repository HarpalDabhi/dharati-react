// import * as React from "react";

import { Link } from "react-router-dom";

export default function Vlog() {
    return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col items-center pt-5 pr-14 pb-12 w-full min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between self-stretch w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-7xl text-green-900 max-md:text-4xl">
            Dharati
          </div>
          <div className="flex gap-5 justify-between items-start self-end mt-10 text-3xl text-green-900 text-opacity-90 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <Link to="/HomeScreen" className="grow text-green-900">Home</Link>   
            <Link to="/AboutScreen" className="flex-auto">About Us</Link>
            <Link to="/Categories" className="flex-auto self-stretch">Categories</Link>
            <Link to="/Assesories" className="flex-auto">Assesories</Link>
            <Link to="/PriceScreen" className="flex-auto">Price</Link>
            <Link to="/Vlog" className="flex-auto text-neutral-400">Vlog</Link>
            <Link to="/Help" className="flex-auto">Help</Link>
          </div>
        </div>
        <div className="relative mt-11 text-7xl font-extrabold text-green-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Daily Vlogs
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 mt-5 w-full max-w-[1204px] min-h-[714px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
            className="mt-56 mb-48 w-32 max-w-full shadow-sm aspect-square max-md:my-10"
          />
        </div>
      </div>
    </div>
  );
}


