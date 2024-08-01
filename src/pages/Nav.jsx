import React from "react";
import Logo from "/photos/micro-logo.png";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFileArrowDown } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { LuUserPlus2 } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
const list = [
  "Microsoft 365",
  "Teams",
  "Copilot",
  "Windows",
  "Surface",
  "Xbox",
  "Support",
];

function Nav() {
  return (
    <div className="px-20  bg-white">
      <header className="w-full bg-white h-14 justify-between  items-center md:container md:mx-auto hidden md:flex">
        <div className="flex py-6 justity-left gap-10">
          <div id="logo" className="">
            <img src={Logo} className="w-28 " />
          </div>
          <ul className="flex justify-around items-center gap-3">
            {list.map((item, idx) => (
              <li>
                <a href="" className="capitalized text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-6">
          all microsoft
          <IoMdArrowDropdown size={20} />
          <VscSearch size={20} />
          <PiShoppingCartLight size={20} />
          <div className="border p-2 rounded-full">
            <LuUserPlus2 size={20} />
          </div>
        </div>
      </header>

      <header className="w-full bg-white h-14 flex justify-around  items-center  block md:hidden">
        <div id="" className="  items-center">
          <IoIosMenu />
        </div>
        <ul className="flex justify-around items-center gap-3 hidden">
          {list.map((items, idx) => (
            <li>
              <a href="" className="capitalized">
                {items.heading}
              </a>
            </li>
          ))}
        </ul>
        <div id="" className="  items-center">
          <CiSearch />
        </div>
        <div id="logo" className="">
          <img src={Logo} className="w-24 mr-10" />
        </div>
        <div id="trally" className=" items-center">
          <MdOutlineShoppingCart />
        </div>
        <div
          id="profile"
          className="bg-white flex items-center justify-center flex"
        >
          <div className="flex gap-3">
            <FaRegUser />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
