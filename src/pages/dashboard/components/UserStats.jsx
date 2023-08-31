import React from "react";
import { formatCurrency } from "../../../utils/currency";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const UserStats = ({ overview }) => {
  return (
    <>
      <h2 className="text-[18px] font-[600] mb-2 mt-6">Overal Statistics</h2>
      <div className="bg-white w-full shadow-md rounded-[8px] py-[16px] px-[12px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-[500]">Paid Interest</span>
          <span className="font-[700] mt-3">{formatCurrency(0)}</span>
        </div>
        <div className="flex flex-col border-l border-black pl-[8px]">
          <span className="font-[500]">Active Loan</span>
          <span className="font-[700] mt-3">
            {formatCurrency(overview.activeLoanAmount)}
          </span>
        </div>
        <div className="flex flex-col items-center border-l border-black pl-[8px]">
          <span className="font-[500]">Total Loan Request</span>
          <span className="font-[700] mt-3 flex gap-[4px] items-center">
            <span>{overview.totalLoans}</span>
            {overview.totalLoans ? (
              <span className="text-green-500 flex">
                <BsArrowUpShort />{" "}
                <span className="text-[10px]">5% last month</span>
              </span>
            ) : (
              <span></span>
            )}
          </span>
        </div>
        <div className="flex flex-col items-center border-l border-black pl-[8px]">
          <span className="font-[500]">Total Loan Declined</span>
          <span className="font-[700] mt-3 flex gap-[4px] items-center">
            <span>{overview.declinedLoans}</span>
            {overview.declinedLoans ? (
              <span className="text-red-500 flex">
                <BsArrowDownShort />{" "}
                <span className="text-[10px]">2% last month</span>
              </span>
            ) : (
              <span></span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserStats;
