import React from "react";
import images from "../../constants/images";

const DashboardHeader = ({ currentUser }) => {
  const fullName = `${currentUser.firstName} ${currentUser.lastName}`;

  return (
    <div className="h-[96px] shadow bg-white px-[50px] flex items-center justify-between">
      <div className="w-[65%]">
        <form className="h-[50px] relative">
          <img
            src={images.search}
            alt="Search"
            className="z-[2] absolute left-[15px] top-[50%] translate-y-[-50%]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full border-gray-400 border-[2px] rounded-[12px] pl-[50px]"
          />
        </form>
      </div>
      <div className="w-[30%] flex justify-between items-center">
        <div>
          <img src={images.bell} alt="Bell" />
        </div>
        <div className="flex gap-[20px] items-start">
          <span>
            <img src={images.avatar} alt="Avatar" />
          </span>
          <span className="flex flex-col">
            <span className="font-bold mb-[5px]">{fullName}</span>
            <span>User</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
