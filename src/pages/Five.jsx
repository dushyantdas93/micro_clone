import React from "react";
import Img3 from "/photos/f-image1.avif";
const cardArr = [
  {
    img: Img3,
    title: "Maximise the everyday with Microsoft 365",
    desc: "Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.",
    btnText: "Buy Now",
  },

  {
    img: Img3,
    title: "Co pilot for microsoft",
    desc: "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
    btnText: "Learn more",
  },
  {
    img: Img3,
    title: "pratik verma1",
    desc: "bhindi lelo free me akdnasdnajkasdknasdlknasdlk ad",
    btnText: "Get Now",
  },
  {
    img: Img3,
    title: "ndaoidnsmdsmdosn lsdosd",
    desc: "bhindi lelo free me akdnasdnajkasdknasdlknasdlk ad",
    btnText: "Get Now",
  },
 
];
function Five() {
  return (
    <div
      id="five"
      className="bg-white  flex justify-between px-12  flex-wrap  w-full"
    >
      {cardArr.map((item, idx) => (
        <div
          id=""
          className="bg-white w-72 my-6  border-2 rounded-sm font-semibold"
        >
          <img src={item.img} className="w-full" />
          <div id="details" className="flex  flex-col gap-3 py-10">
            <h1 className="capitalize font-bold text-2xl px-4">
             {item.title}
            </h1>
            <p className=" px-4">
             {item.desc}
            </p>

            <a href="" className=" px-4">
              <button className="bg-blue-300 p-2 ">{item.btnText}</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Five;
