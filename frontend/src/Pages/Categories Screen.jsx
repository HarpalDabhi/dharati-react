// import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const category1 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Trees" },
    });
  };

  const category2 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Flowers" },
    });
  };

  const category3 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Climbers" },
    });
  };

  const category4 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Herbs" },
    });
  };

  const category5 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Vegetables" },
    });
  };

  const category6 = () => {
    navigate("/Viewcategory", {
      state: { Category: "Plantation" },
    });
  };

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col pt-5 pr-7 pb-7 w-full min-h-[1030px] max-md:pr-5 max-md:max-w-full">
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
            <Link to="/HomeScreen" className="grow text-green-900">
              Home
            </Link>
            <Link to="/AboutScreen" className="flex-auto">
              About Us
            </Link>
            <Link className="flex-auto self-stretch text-neutral-400 text-opacity-90">
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
            <Link to="/Help" className="flex-auto">
              Help
            </Link>
          </div>
        </div>
        <div className="relative self-center mt-8 text-7xl font-extrabold text-green-900 max-md:max-w-full max-md:text-4xl">
          {" "}
          Plant Categories
        </div>
        <div className="relative mt-12 ml-6 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category1}
            >
              <div className="flex relative flex-col grow px-16 py-6 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle1.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2">Trees</div>
              </div>
            </div>
            <div
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category2}
            >
              <div className="flex relative flex-col grow px-16 py-6 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle2.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2">Flowers</div>
              </div>
            </div>
            <div
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category3}
            >
              <div className="flex relative flex-col grow px-16 py-6 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle3.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-1.5">Climbers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 ml-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category4}
            >
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle4.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-4 w-[249px]">
                  <br />
                  Herbs
                </div>
              </div>
            </div>
            <div
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category5}
            >
              <div className="flex relative flex-col grow px-16 py-5 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle5.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-2">Vegetables</div>
              </div>
            </div>
            <div
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
              onClick={category6}
            >
              <div className="flex relative flex-col grow px-16 py-6 w-full text-4xl font-extrabold whitespace-nowrap rounded-3xl bg-lime-200 bg-opacity-60 text-lime-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../src/assets/Rectangle6.png"
                  className="w-full aspect-[1.15]"
                />
                <div className="self-center mt-1.5">Plantation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
