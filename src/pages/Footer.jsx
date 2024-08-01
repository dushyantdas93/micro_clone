import React from "react";

import { IoToggle } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";

const footer1 = [
  { icon: <FaEarthAmericas />, sub: "English(India)" },
  { icon: <IoToggle />, sub: "Your privacy Choices" },
  { icon: "", sub: "Consumer Health Privacy" },
];

const footer2 = [
  { atag: "", sub: "contact microsoft" },
  { atag: "", sub: "Privacy" },
  { atag: "", sub: "Terms of use" },
  { atag: "", sub: "Trademarks" },
  { atag: "", sub: "About our ads ©" },
  { atag: "", sub: "Microsoft 2024" },
];

function footer() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-start gap-5 md:items-center  md:justify-around text-sm bg-gray-300 w-full py-6 ">
        <div className="flex items-center justify-between flex-col md:flex-row gap-2">
          {footer1.map((items, idx) => (
            <div className="flex items-center text-lg gap-2 pl-2">
              {items.icon}
              <h1 className="text-xs">{items.sub}</h1>
            </div>
          ))}
        </div>

        <div className=" capitalize flex items-center flex-row md:flex-row  justify-center gap-5 text-xs">
          {footer2.map((items, idx) => (
            <a href="">
              <div>{items.sub}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default footer;
