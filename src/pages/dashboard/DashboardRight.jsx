import React from "react";
import images from "../../constants/images";

const DashboardRight = () => {
  return (
    <div className="">
      <div className="w-max mx-auto">
        <img src={images.atm_card} alt="Atm Card" />
      </div>
      <div className="rounded-[12px] shadow-md px-[10px] pt-[22px] pb-[15px] mt-[25px]">
        {/* Pending Loan */}
        <div>
          <h3 className="font-[700] mb-4">Pending Loan</h3>
          <div className="bg-white rounded-[4px]">Musa Mansa</div>
        </div>
        {/* Recent Loans */}
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
