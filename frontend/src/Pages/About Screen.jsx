// import * as React from "react";

import { Link } from "react-router-dom";

    export default function AboutScreen() {

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col px-5 pt-5 pb-2 w-full min-h-[1041px] max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"

          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-7xl text-green-900 max-md:text-4xl">
            Dharati
          </div>
          <div className="flex gap-5 justify-between items-start self-end mt-10 text-3xl text-green-900 text-opacity-90 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <Link to="/HomeScreen" className="grow text-green-900">Home</Link>   
            <div className="flex-auto text-neutral-400 text-opacity-90">
              About Us
            </div>
            <Link to="/Categories" className="flex-auto self-stretch">Categories</Link>
            <Link to="/Assesories" className="flex-auto">Assesories</Link>
            <Link to="/PriceScreen" className="flex-auto">Price</Link>
            <Link to="/Vlog" className="flex-auto">Vlog</Link>
            <Link to="/Help" className="flex-auto">Help</Link>
          </div>
        </div>
        <div className="relative self-center mt-28 text-7xl font-extrabold text-green-900 whitespace-nowrap max-md:mt-10 max-md:text-4xl">
          Our Story
        </div>
        <div className="flex relative flex-col px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
          <div className="self-start ml-3 text-3xl text-zinc-950 max-md:max-w-full">
            One fine day, an idea came into our mind “what if we could decorate
            people’s homes & offices with greenery?”. And that is how this green
            space called KYARI was born.
          </div>
          <div className="mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="../src/assets/image 2.png"
                  className="w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-8 text-3xl text-neutral-950 max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    To decorate your interior landscape with greenery, to give
                    it a luxurious vibe, to brighten up your indoor garden, to
                    make you feel calm like you are in the arms of nature. Our
                    plants are grown with the utmost care to keep them healthy &
                    happy. It is no surprise that spending time with nature
                    brings tranquility. With a busy lifestyle, having a lovely
                    indoor garden is perfect to feel the embrace of nature.And
                    for these plants, every planter is crafted to reflect class
                    & uniqueness, elegance & style.{" "}
                  </div>
                  
                  
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}


