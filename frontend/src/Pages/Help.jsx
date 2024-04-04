// import * as React from "react";

import { Link } from "react-router-dom";

export default function Help() {
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
            <Link to="/AboutScreen" className="flex-auto">
              About Us
            </Link>
            <Link to="/Categories" className="flex-auto self-stretch">
              Categories
            </Link>
            <Link to="/Assesories" className="flex-auto">
              Assesories
            </Link>
            <Link to="/PriceScreen" className="flex-auto">
              Price
            </Link>
            <Link to="/Vlog" className="flex-auto">
              Vlog
            </Link>
            <div className="self-stretch text-neutral-400 text-opacity-90">
              Help
            </div>
          </div>
        </div>
        <div className="relative mt-14 text-7xl font-extrabold text-green-900 whitespace-nowrap max-md:mt-10 max-md:text-4xl">
          Contact Us
        </div>
        <div className="flex relative gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="../src/assets/M1.png"
            className="my-auto aspect-square w-[70px]"
          />
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="text-4xl text-white max-md:max-w-full">
              Our office Address
            </div>
            <div className="mt-6 text-2xl text-lime-200 max-md:max-w-full">
              Dharati plants,150 feet ring rd,Rajkot,302466
            </div>
          </div>
        </div>
        <div className="flex relative gap-5 justify-between items-start mt-7 max-w-full whitespace-nowrap w-[446px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="../src/assets/M2.png"
            className="aspect-square w-[70px]"
          />
          <div className="flex flex-col flex-1 mt-1.5">
            <div className="text-4xl text-white">General Enquiries</div>
            <div className="mt-4 text-2xl text-lime-200">
              dharatiplantgroup@gmail.com
            </div>
          </div>
        </div>
        <div className="relative mt-8 mb-44 max-w-full w-[446px] max-md:mb-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center max-md:mt-8">
                <img
                  loading="lazy"
                  src="../src/assets/M3.png"
                  className="aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  src="../src/assets/M4.png"
                  className="mt-11 aspect-square w-[70px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow text-4xl text-white max-md:mt-7">
                <div>Call Us</div>
                <div className="mt-6 text-2xl text-lime-200 whitespace-nowrap">
                  0879599246, 9924680755
                </div>
                <div className="mt-9">Our Timing</div>
                <div className="mt-4 text-2xl text-lime-200 whitespace-nowrap">
                  Mon-Sun : 9:00 AM - 9:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
