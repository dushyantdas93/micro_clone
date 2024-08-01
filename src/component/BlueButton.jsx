import React from "react";

const BlueButton = ({ text, children }) => {
  return (
    <button className="bg-[#005CA5] px-4 py-2 text-white rounded-sm capitalize  text-base font-semibold">
      {text ? text : children}
    </button>
  );
};

export default BlueButton;
