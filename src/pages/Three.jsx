import React from "react";
import Img4 from "/photos/t-img1.avif";
import { FaAngleRight } from "react-icons/fa6";
import BlueButton from "../component/BlueButton";

const cardArr1 = [
  {
    img: Img4,
    heading: "Maximise the everyday with Microsoft 365",
    subheading:
      "Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.",
    btnValue: "for one person",
    atag: "for up six people",
  },
  {
    img: Img4,
    heading: "Xbox Game Pass Ultimate",
    subheading:
      "Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.",
    btnValue: "Join now",
  },
  {
    img: Img4,
    heading: "Xbox Series X",
    subheading: "Xbox Series X.",
    btnValue: "Xbox Series X",
  },
  {
    img: Img4,
    heading: "Get creative with Microsoft Designer",
    subheading:
      "Create images with words, craft next-level designs and edit photos in seconds with the power of AI.",
    btnValue: "for one person",
    atag: "for up six people",
  },
];

function Three() {
  return (
    <div className="bg-white">
    <div
      id="third"
      className="bg-white flex h-full  justify-between  gap-4 px-12  flex-wrap "
    >
      {cardArr1.map((items, idx) => (
        <div
          id=""
          className="bg-white w-72 my-6 shadow-md h-[56vh] rounded-sm font-semibold "
        >
          <img src={items.img} className="w-full" />

          <div className="flex flex-col h-full shadow-md bg-white justify-between   ">
            <div id="details" className="flex  flex-col gap-3 pt-10">
              <h1 className="capitalize text-xl px-4 text-ellipsis overflow-hidden font-semibold">
                {items.heading}
              </h1>
              <p className=" px-4 ">{items.subheading}</p>
          
              <a href="" className=" px-4">
                <BlueButton text={items.btnValue} />
              </a>
              <a href="" className="underline text-blue-500 px-4 capitalize">
                {items.atag} <span>{items.atag && <FaAngleRight />}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Three;
