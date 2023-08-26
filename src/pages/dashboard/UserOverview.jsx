import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import images from "../../constants/images";

const UserOverview = () => {
  return (
    <>
      <Dashboard>
        <div className="">
          <div className="bg-white w-full shadow-md rounded-[8px] py-[16px] px-[20px] flex items-center justify-between">
            <div className="">
              <div>
                <img src={images.wallet} alt="Wallet" />
              </div>
              <div className="font-[500] mt-3">
                <span>Available Balance</span>
              </div>
              <div className="text-color-primary text-[20px] md:text-[25px] font-bold">
                <span>$70,000.00</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="h-[38px] w-[115px] flex justify-center items-center rounded-[4px] text-color-primary border border-color-primary hover:bg-gray-100">
                Withdraw
              </button>
              <button className="h-[38px] w-[115px] flex justify-center items-center rounded-[4px] border-none bg-color-primary text-white hover:bg-color-secondary">
                Request Loan
              </button>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default UserOverview;
