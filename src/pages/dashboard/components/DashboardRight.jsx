import React from "react";
import images from "../../../constants/images";
import DashbaordRightUser from "./DashboardRightUser";

const DashboardRight = ({ currentUser }) => {
  const role = currentUser?.role;

  return (
    <div className="">
      <div className="w-max mx-auto">
        <img src={images.atm_card} alt="Atm Card" />
      </div>
      <div className="rounded-[12px] shadow-md px-[10px] pt-[22px] pb-[15px] mt-[25px]">
        {role === "user" ? (
          <DashbaordRightUser currentUser={currentUser} />
        ) : (
          <DashbaordRightUser currentUser={currentUser} />
        )}
      </div>
    </div>
  );
};

export default DashboardRight;
