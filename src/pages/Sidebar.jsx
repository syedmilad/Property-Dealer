import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setMenuItem, setSubMenuItem } from "../actions";
import { sidebarWithMenuData } from "../data/sidebaData";
import { useEffect } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menuItem = useSelector((state) => state?.menuItem);
  const subMenuItem = useSelector((state) => state?.subMenuItem);

  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean); // ['units', 'abc']
    if (pathParts.length >= 1) {
      const main = pathParts[0]; // 'units'
      const sub = pathParts[1]; // 'abc'

      const matchedMenu = sidebarWithMenuData.find(
        (item) => item.name === main
      );
      if (matchedMenu) {
        dispatch(setMenuItem(matchedMenu));

        const matchedSub = matchedMenu?.submenuItem?.items?.find(
          (subItem) => subItem.name === sub
        );
        if (matchedSub) {
          dispatch(setSubMenuItem(matchedSub));
        } else {
          dispatch(setSubMenuItem(null));
        }
      }
    }
  }, [location.pathname, dispatch]);

  return (
    <div className="flex h-full w-full bg-white py-[16px] space-x-4">
      {/* Sidebar */}
      <div className="bg-primary px-3 py-[60px] flex flex-col items-center space-y-6 rounded-2xl max-h-[784px] ">
        {sidebarWithMenuData?.map((item, index) => (
          <div
            className={clsx(
              "flex flex-col relative items-center px-4 py-1 rounded-[2px] cursor-pointer hover:bg-[#B5DEF2] ",
              item.name === menuItem?.name ? "bg-[#B5DEF2]" : ""
            )}
            onClick={() => dispatch(setMenuItem(item))}
            key={index}
          >
            <img
              src={item?.icon}
              alt={item?.icon}
              className="w-[20px] h-[20px] object-contain"
            />

              {item.name === menuItem?.name && (
                <div className="absolute  top-0 left-[68px] flex flex-col  items-start justify-start min-w-[150px] ">
                  <span className="text-[#003A92] font-bold text-base">
                    {item?.submenuItem?.label}
                  </span>
                  <div className="flex flex-col items-start justify-start space-y-2 mt-2 px-2 w-full">
                    {item?.submenuItem?.items?.map((subItem, subIndex) => (
                      <Link
                        to={`/${item?.name}/${subItem?.name}`}
                        key={subIndex}
                        onClick={() => dispatch(setSubMenuItem(subItem))}
                        className={clsx(
                          "text-[#272729] font-normal text-sm px-2 py-1 hover:bg-[#E7F3F9] w-full block",
                          subMenuItem?.name === subItem.name
                            ? "bg-[#E7F3F9]"
                            : ""
                        )}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
