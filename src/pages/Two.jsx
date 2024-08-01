import React from "react";
import { SiWindows } from "react-icons/si";
import { FaFile } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";

const short = [
  {
    icon: <SiWindows />,
    subheading: "choose your microsoft 365",
  },
  {
    icon: <FaXbox />,
    subheading: "shop xbox",
  },
  {
    icon: <SiWindows />,
    subheading: "get window 11",
  },
  {
    icon: <FaFile />,
    subheading: "explore surface devices",
  },
];

function Two() {
  return (
    <div
      id="second"
      className=" border-b-2  w-full flex  justify-center flex-wrap mb-20 md:h-52 md:container md:mx-auto"
    >
      {short.map((item, idx) => (
        <div id="" className=" flex flex-col justify-center items-center gap-3 text-2xl">
          {item.icon}
          <a href="" className="capitalize underline text-blue-500 px-10 text-lg py-5
          ">
            {item.subheading}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Two;
