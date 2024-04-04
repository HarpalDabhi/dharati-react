// import * as React from "react";

export default function RootcropCaregory() {
    return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col px-6 pt-9 pb-1 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-center text-7xl font-extrabold text-green-900 whitespace-nowrap max-md:text-4xl">
          Root Crops
        </div>
        <div className="relative mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/root1.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2">Onion</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/root2.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2.5">Carrot</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/root3.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2.5">Root</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-9 mt-9 text-4xl font-extralight text-white underline max-md:mr-2.5 max-md:max-w-full">
          Root vegetables are underground plant parts eaten by humans as food.
          In agricultural and culinary terminology, the term applies to true
          roots such as taproots and tuberous roots as well as non-roots such as
          bulbs, corms, rhizomes, and stem tubers
          <br />
          <br />
          Cash root crops are an important part of the cropping systems of a
          significant number of farmers throughout the main arable areas of the
          UK. On appropriate soil types they can be part of rotational diversity
          of cropping, acting as a break from combinable crops and, if grown
          well, can provide higher gross margins than cereals,{" "}
          <a
            href="https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/oilseeds"
            className="underline"
            target="_blank"
          >
            oilseeds
          </a>{" "}
          and legumes
        </div>
      </div>
    </div>
  );
}


