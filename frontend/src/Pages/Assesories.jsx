// import * as React from "react";

import { Link } from "react-router-dom";

export default function Assesories() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col pt-5 pr-7 pb-7 w-full min-h-[1030px] max-md:pr-5 max-md:max-w-full">
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
            <Link to="/HomeScreen" className="grow text-green-900">
              Home
            </Link>
            <Link to="/AboutScreen" className="flex-auto">
              About Us
            </Link>
            <Link to="/Categories" className="flex-auto self-stretch">
              Categories
            </Link>
            <Link className="flex-auto text-neutral-400 text-opacity-90">
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
        <div className="flex relative flex-col px-20 mt-9 w-full max-md:px-5 max-md:max-w-full">
          <div className="self-center text-7xl font-extrabold text-green-900 max-md:max-w-full max-md:text-4xl">
            Tools Gardening
          </div>
          <div className="mt-4 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as1.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Trowel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as2.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Shovel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as3.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Rake
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow px-0.5 w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as4.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Watering Can
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as5.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Hoe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as6.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Secateurs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 max-md:mr-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as7.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Soil Knife
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="../src/assets/as8.png"
                        className="grow w-full aspect-[1.45] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl text-center text-black max-md:mt-10">
                        Fork
                      </div>
                    </div>
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
