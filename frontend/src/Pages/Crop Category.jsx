// import * as React from "react";

export default function CropCategory() {
    return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col px-6 py-11 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-center text-7xl font-extrabold text-green-900 max-md:max-w-full max-md:text-4xl">
          Crop Categories
        </div>
        <div className="relative px-0.5 mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop1.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2.5">Food</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop2.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2">Fiber</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop3.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-start mt-2 ml-16 max-md:ml-2.5">Oil</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-0.5 mt-14 mb-9 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 pt-5 pb-7 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop4.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-1">Ornamental</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop5.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-start mt-2 ml-11 max-md:ml-2.5">Zaid</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/crop6.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-start mt-2.5 ml-14 max-md:ml-2.5">
                  Root
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


