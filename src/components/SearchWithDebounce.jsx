import React from "react";
import { PSearch } from "../assets";

const SearchWithDebounce = ({
  onChange,
  value,
  type = "text",
  placeholder = "Search here",
}) => {
  return (
    <div className="flex flex-1 items-center justify-start gap-2 bg-[#FFFFFF] rounded-[5px] px-[16px] py-[10px] min-w-[363px]">
      <img
        className="w-[16px] h-[16px] object-contain cursor-pointer text-[#BDBDBD]"
        src={PSearch}
        alt="searchIcon"
      />
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border font-normal text-xs !border-black border-none focus:outline-none focus:ring-0 focus:border-transparent text-[#BDBDBD]"
      />
    </div>
  );
};

export default SearchWithDebounce;
