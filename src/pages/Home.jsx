import React from "react";
import Img1 from "/photos/bg-image1.avif";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import BlueButton from "../component/BlueButton";

function Home() {
  return (
    <div>
      <div id="main" className="border-b-2 w-full ">
        <Swiper className="mySwiper">
          {["x", "x", "r", "u", "p"].map((_, idx) => (
            <SwiperSlide>
              <div id="first" className="w-full">
                <img
                  src={Img1}
                  className="h-60 md:h-full w-full md:w-full object-right md:relative"
                />

                <div
                  id="detail"
                  className="w-10/12 h-1/2 md:h-80 p-5 bg-white flex flex-col gap-4 items-start md:w-5/12  md:absolute md:top-10 left-14 rounded-sm  "
                >
                  <a href="">
                    <button className="bg-yellow-300 px-4 capitalize rounded-sm font-semibold md:ml-5 md:mt-10 ">
                      New
                    </button>
                  </a>
                  <h1 className="capitalize text-3xl font-semibold md:ml-5">
                    meet surface pro
                  </h1>

                  <p className=" text-left pl-4 text-base text-ellipsis  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, minima! asddjkasbdjasndkasbdkj basdoias doias
                  </p>
                  <a href="">
                    <BlueButton text={"Learn More"} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
