import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import RightItemSkeleton from "./RightItemSkeleton";
import { formatCurrency } from "../../../utils/currency";
import { getDateTime } from "../../../utils/date";
import { Link } from "react-router-dom";

const DashbaordRightUser = ({ currentUser }) => {
  const endPoint = `/users/${currentUser._id}/loan-requests`;
  const {
    data: dataPendingLoan,
    isSuccess: isSuccessPendingLoan,
    isLoading: isLoadingPendingLoan,
  } = useFetch(endPoint, "get-pending-loan", {
    status: "pending",
  });
  const {
    data: dataLoanRequests,
    isSuccess: isSuccessLoanRequests,
    isLoading: isLoadingLoanRequests,
  } = useFetch(endPoint, "get-recent-loans", { count: 4 });

  const [pendingLoan, setPendingLoan] = useState(null);
  const [recentLoans, setRecentLoans] = useState([]);

  useEffect(() => {
    if (isSuccessPendingLoan) {
      setPendingLoan(dataPendingLoan.pendingLoan);
    }
  }, [isSuccessPendingLoan, dataPendingLoan]);

  useEffect(() => {
    if (isSuccessLoanRequests) {
      setRecentLoans(dataLoanRequests.loanRequests);
    }
  }, [isSuccessLoanRequests, dataLoanRequests]);

  return (
    <>
      {/* Pending Loan */}
      <div>
        <h3 className="font-[700] mb-3">Pending Loan</h3>
        {isLoadingPendingLoan && <RightItemSkeleton />}
        {pendingLoan ? (
          <div className="bg-white rounded-[4px] px-[5px] py-[7px] flex items-center gap-[25px]">
            <div className="flex flex-col items-center bg-gray-cus-1 font-[500] rounded-[5px] px-[5px]">
              <span>
                {getDateTime(pendingLoan.requestDate).abbreviatedMonth}
              </span>
              <span> {getDateTime(pendingLoan.requestDate).date}</span>
            </div>
            <div>
              <span className="font-[600] text-[18px]">
                {formatCurrency(pendingLoan.amount)}
              </span>
            </div>
            <div>
              <button className="border-b-[2px] border-color-primary font-[500] cursor-pointer text-color-secondary">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <RightItemSkeleton none={true} />
        )}
      </div>
      {/* Recent Loans */}
      <div className="mt-4">
        <div className="flex justify-between">
          <h3 className="font-[700] mb-3">Recent Loans</h3>
          <Link
            to="/user/dashboard/loan-requests"
            className="underline font-[500]"
          >
            View all
          </Link>
        </div>

        <ul className="list-none m-0">
          {isLoadingLoanRequests &&
            [1, 2].map((item) => (
              <li key={item} className="mb-3">
                <RightItemSkeleton />
              </li>
            ))}
          {recentLoans.length === 0 && (
            <li>
              <RightItemSkeleton none={true} />
            </li>
          )}
          {recentLoans.map((loan) => (
            <li
              key={loan._id}
              className="bg-white mb-3 rounded-[4px] px-[5px] py-[7px] flex items-center gap-[25px]"
            >
              <div className="flex flex-col items-center bg-gray-cus-1 font-[500] rounded-[5px] px-[5px]">
                <span> {getDateTime(loan.requestDate).abbreviatedMonth}</span>
                <span> {getDateTime(loan.requestDate).date}</span>
              </div>
              <div>
                <span className="font-[600] text-[18px]">
                  {formatCurrency(loan.amount)}
                </span>
              </div>
              <div>
                <span className="capitalize border-b-[2px] border-red-300 font-[500] text-red-500">
                  {loan.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashbaordRightUser;
