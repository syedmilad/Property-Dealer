import { PropertySetting, Ring, UserIcon } from "../../assets";

const TopBar = () => {
  return (
    <div className=" flex flex-1 items-center justify-between px-6 py-3 space-x-6">
      {/* Divider */}
      <div className="border-r border-gray-[#282B2E] h-[32px]"></div>

      {/* Settings Icon */}

      {/* Notification Icon with Dot */}
      <div className="flex flex-row items-center justify-start gap-10">
        <img
          src={PropertySetting}
          alt="ring-image"
          className="h-[20px]  w-[20px] object-contain cursor-pointer "
        />
        <div className="relative flex flex-row gap-6 cursor-pointer ">
          <img
            src={Ring}
            alt="ring-image"
            className="h-[20px]  w-[20px] object-contain"
          />
          <span className="absolute top-0 right-2 h-2 w-2 bg-red-600 rounded-full"></span>
        </div>
        <div className="border-r border-gray-[#282B2E] h-[32px]"></div>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img src={UserIcon} alt="" />
        <div>
          <p className="text-sm font-semibold text-[#272729] leading-none">
            Alex Jonhson
          </p>
          <p className="text-xs font-normal text-[#272729]">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
