import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./common/Dashboard";
import images from "../../constants/images";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";
import { GlobalContext } from "../../providers/ContextProvider";

const UserOverview = () => {
  const { currentUser } = useContext(GlobalContext);
  const endPoint =
    currentUser?.role === "admin"
      ? "/users/admin-overview"
      : "/users/user-overview";
  const { data, isSuccess } = useFetch(endPoint, "get-overiew");

  const [overview, setOverview] = useState({
    balance: 0,
    activeLoanAmount: 0,
    totalLoans: 0,
    declinedLoans: 0,
  });

  useEffect(() => {
    if (isSuccess) {
      setOverview(data.overview);
    }
  }, [isSuccess]);

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
                <span>${overview.balance}</span>
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
          <h2 className="text-[18px] font-[600] mb-2 mt-6">
            Overal Statistics
          </h2>
          <div className="bg-white w-full shadow-md rounded-[8px] py-[16px] px-[12px] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-[500]">Paid Interest</span>
              <span className="font-[700] mt-3">$400,000</span>
            </div>
            <div className="flex flex-col border-l border-black pl-[8px]">
              <span className="font-[500]">Active Loan</span>
              <span className="font-[700] mt-3">
                ${overview.activeLoanAmount}
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
        </div>
      </Dashboard>
    </>
  );
};

export default UserOverview;
