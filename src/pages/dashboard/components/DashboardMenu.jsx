import React from "react";
import images from "../../../constants/images";
import { Link, NavLink } from "react-router-dom";
import { userLinks, adminLinks } from "../../../data/links";
import apiClient from "../../../services/api-client";

const activeStyle =
  "flex gap-2 pl-[25px] py-[16px] text-color-primary text-[18px] font-[700] rounded-[6px] shadow shadow-color-primary border-l-[5px] border-b-[1px] border-color-primary bg-gray-cus-1";
const nonActiveStyle =
  "flex gap-2 pl-[25px] py-[16px] text-color-primary text-[18px] rounded-[6px] shadow shadow-color-primary border-l-[5px] border-gray-cus-1 bg-gray-cus-1";

const DashboardMenu = ({ currentUser }) => {
  const role = currentUser?.role || "user";

  let menuLinks = [...userLinks];
  let topLinkCount = 3;

  if (role === "admin") {
    menuLinks = [...adminLinks];
    topLinkCount = 4;
  }

  const logout = async () => {
    try {
      await apiClient.delete("/auth/logout", {
        withCredentials: true,
      });
      window.location = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-[6px] lg:px-0 h-screen flex flex-col justify-between">
      <div className="">
        <div className="mt-[25px] flex justify-center">
          <Link to="/">
            <img src={images.yawoo} alt="Yawoo Logo" className="w-[102px]" />
          </Link>
        </div>

        <ul className="m-0 list-none mt-[50px]">
          {menuLinks.map((item, index) => {
            if (index < topLinkCount)
              return (
                <li key={item.label} className="mb-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => {
                      return isActive ? activeStyle : nonActiveStyle;
                    }}
                  >
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
          })}
        </ul>
      </div>
      <div>
        <ul className="m-0 list-none mt-[50px]">
          {menuLinks.map((item, index) => {
            if (index + 1 > topLinkCount)
              return (
                <li key={item.label} className="mb-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => {
                      return isActive ? activeStyle : nonActiveStyle;
                    }}
                  >
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
          })}
          <li
            className={`mb-2 ${nonActiveStyle} cursor-pointer`}
            onClick={logout}
          >
            <img src={images.log_out} alt="Logout" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
