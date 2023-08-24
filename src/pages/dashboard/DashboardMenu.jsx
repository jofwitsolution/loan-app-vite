import React from "react";
import images from "../../constants/images";

const DashboardMenu = () => {
  return (
    <div>
      <div className="mt-[10px] flex justify-center">
        <img src={images.yawoo} alt="Yawoo Logo" className="w-[95px]" />
      </div>
    </div>
  );
};

export default DashboardMenu;
