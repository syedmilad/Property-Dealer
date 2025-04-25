import React from "react";

const Button = ({ title, onClick, classess }) => {
  return (
    <button
      onClick={onClick}
      className={`px-[2px] py-[2px] cursor-pointer rounded-[3px] bg-btnBgPrimary font-light text-xs text-[#fff]  ${classess} `}
    >
      {title}
    </button>
  );
};

export default Button;
