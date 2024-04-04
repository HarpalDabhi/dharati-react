// import * as React from "react";

export default function AboutScreen2() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="overflow-hidden px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="../src/assets/screen2.png"
              className="mt-7 w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="mt-16 text-3xl text-stone-950 max-md:mt-10 max-md:max-w-full">
              With our decor options, you can give your home & office a lavish
              look. Whether you need a houseplant, a planter, or a succulent to
              decorate your home & office; we are here for you. We have a wide
              range of decór options, from traditional design to contemporary,
              from decorative plants to succulents, and from planters to planter
              stands; we have everything that will make you fall in love with
              your indoors.Every day we are learning something new about the
              world of plants, succulents, and planters; to improve our products
              to serve you in the best way possible.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


