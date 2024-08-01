import React from "react";
import Img2 from "/photos/bg-image2.avif";
import { FaAngleRight } from "react-icons/fa6";

function Four() {
  return (
    <div className=" py-64 bg-white">
      <div
        id="main"
        className="border-b-2 relative md:mt-15 md:container md:mx-auto"
      >
        <div id="fourth" className=" w-full">
          <img
            src={Img2}
            className="h-60 w-full md:h-full object-right m-auto mt-7"
          />

          <div
            id="detail"
            className="w-80 mx-auto h-1/2 bg-transparent text-black  md:text-white flex flex-col gap-4 mt-5 md:w-3/12 md:ml-40 md:absolute md:top-1/4"
          >
            <a href="">
              <button className="bg-orange-300 px-4 capitalize md:ml-5 md:mt-5 rounded-sm font-semibold">
                unlimited game sale
              </button>
            </a>
            <h1 className="capitalize text-xl font-bold md:ml-5">
              Up to 60% off digital games
            </h1>

            <p className=" md:ml-5 ">
              The wait is over – score incredible deals on select Xbox and PC
              titles. Sale ends 31 July.
            </p>
            <div className="flex flex-col md:flex-row">
              <a href="">
                <button className="bg-white text-black px-2 py-2 capitalize md:ml-5 rounded-sm font-bold">
                  shop xbox game
                </button>
              </a>
              <a
                href=""
                className="underline text-blue-500 px-4 capitalize mt-2"
              >
                shop PC games <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
