import React from "react";
import images from "../../../constants/images";
import { recentLoans } from "../../../data/loans";

const DashboardRight = ({ currentUser }) => {
  return (
    <div className="">
      <div className="w-max mx-auto">
        <img src={images.atm_card} alt="Atm Card" />
      </div>
      <div className="rounded-[12px] shadow-md px-[10px] pt-[22px] pb-[15px] mt-[25px]">
        {/* Pending Loan */}
        <div>
          <h3 className="font-[700] mb-3">Pending Loan</h3>
          <div className="bg-white rounded-[4px] px-[5px] py-[7px] flex items-center gap-[25px]">
            <div className="flex flex-col items-center bg-gray-cus-1 font-[500] rounded-[5px] px-[5px]">
              <span>Jan</span>
              <span>12</span>
            </div>
            <div>
              <span className="font-[600] text-[18px]">$500,000</span>
            </div>
            <div>
              <button className="border-b-[2px] border-color-primary font-[500] cursor-pointer text-color-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* Recent Loans */}
        <div className="mt-4">
          <h3 className="font-[700] mb-3">Recent Loans</h3>
          <ul className="list-none m-0">
            {recentLoans.map((loan) => (
              <li
                key={loan._id}
                className="bg-white mb-3 rounded-[4px] px-[5px] py-[7px] flex items-center gap-[25px]"
              >
                <div className="flex flex-col items-center bg-gray-cus-1 font-[500] rounded-[5px] px-[5px]">
                  <span>Jan</span>
                  <span>16</span>
                </div>
                <div>
                  <span className="font-[600] text-[18px]">${loan.amount}</span>
                </div>
                <div>
                  <span className="capitalize border-b-[2px] border-red-300 font-[500] cursor-pointer text-red-500">
                    {loan.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
