import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div>
      <div className="mt-[10px] flex justify-center">
        <Link to="/">
          <img src={images.yawoo} alt="Yawoo Logo" className="w-[95px]" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardMenu;
