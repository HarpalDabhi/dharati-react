// import * as React from "react";

import { Link } from "react-router-dom"

export default function PriceScreen() {
    return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col pt-5 pb-8 w-full min-h-[1024px] max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between self-center px-5 w-full text-center max-w-[1381px] max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-7xl text-green-900 max-md:text-4xl">
            Dharati
          </div>
          <div className="flex gap-5 justify-between items-start self-end mt-10 text-3xl text-green-900 text-opacity-90 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <Link to="/HomeScreen" className="grow text-green-900">Home</Link>    
                  <Link to="/AboutScreen" className="flex-auto">About Us</Link>
                  <Link className="flex-auto self-stretch text-opacity-90">
              Categories
            </Link>
           
            <Link to="/Assesories" className="flex-auto">Assesories</Link>
            <Link className="self-stretch text-neutral-400 text-opacity-90">
              Price
            </Link>
            
           
            <Link to="/Vlog" className="flex-auto">Vlog</Link>
            <Link to="/Help" className="flex-auto">Help</Link>
          </div>
        </div>
        <div className="flex relative flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="w-full max-w-[1220px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-4xl font-extrabold text-green-900 whitespace-nowrap max-md:mt-10">
                  <div>Plants Price : -</div>
                  <div className="flex flex-col pr-px pl-11 mt-4 text-3xl font-light text-white max-md:pl-5">
                    <img
                      loading="lazy"
                      src="../src/assets/P1.png"
                      className="w-full shadow-sm aspect-[0.83]"
                    />
                    <div className="self-center mt-5 ml-6">299 Rs.</div>
                  </div>
                  <div className="mt-5">Seeds Price : -</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P2.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">249 Rs.</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P3.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">249 Rs.</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P4.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">109 Rs.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full max-w-[1174px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P5.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">99 Rs.</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P6.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">199 Rs.</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P7.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">249 Rs.</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-3xl font-light text-white whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../src/assets/P8.png"
                    className="w-full shadow-sm aspect-[0.83]"
                  />
                  <div className="self-center mt-5">109 Rs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


