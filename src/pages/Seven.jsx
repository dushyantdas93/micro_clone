import React from "react";

const footer = [
  {
    heading: `what's new`,
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
  {
    heading: "microsoft-store",
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
  {
    heading: "education",
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
  {
    heading: "business",
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
  {
    heading: "developer & id",
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
  {
    heading: "company",
    sub: [
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
      { value: "surface pro" },
    ],
  },
];
function Seven() {
  return (
    <div className="bg-white">
      <div className="flex justify-around gap-10 bg-gray-300 flex-col md:flex-row pl-10 ">
        {footer.map((item, idx) => (
          <div>
            <h1 className="capitalize mt-10 font-bold  ">{item.heading}</h1>

            <ul>
              {item.sub.map((subItem) => {
                return (
                  <li>
                    <a href="" className="capitalize text-xs hover:underline">
                      {subItem.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seven;
