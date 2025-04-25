import React, { useCallback } from "react";
import { ChecronsRight, NotificationIcon, PropertyLogo } from "../assets";
import SearchWithDebounce from "../components/SearchWithDebounce";
import TopBar from "../components/Topbar/Topbar";

const Header = () => {
  const [inputValue, setInputValue] = React.useState("");
  const debounce = (callback, delay) => {
    let timeoutId;
    return (value) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(value);
      }, delay);
    };
  };
  const hanldeSearch = (value) => {
    try {
      console.log("searching for ", value);
    } catch (error) {
      console.log("error in search", error);
    }
  };
  const debounceSearch = useCallback(debounce(hanldeSearch, 1000), []);
  return (
    <div className="w-full h-full bg-[#E7F3F9] flex items-center justify-between px-[24px] py-[4px] ">
      <div className="flex flex-[1.7] flex-row justify-start items-center gap-6">
        <div className="flex-[0.15] flex ">
          <img src={PropertyLogo} alt="PropertyLogo" />
        </div>
        <div className="flex-[1.85] justify-start items-center flex max-w-[363px]">
          <SearchWithDebounce
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              debounceSearch(value);
            }}
            value={inputValue}
          />
        </div>
      </div>
      <div className="flex flex-[0.5]">
        <TopBar />
      </div>
    </div>
  );
};

export default Header;
