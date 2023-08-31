import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { useFetch } from "../../hooks/useFetch";
import { GlobalContext } from "../../providers/ContextProvider";
import { formatCurrency } from "../../utils/currency";
import UserAccount from "./components/UserAccount";
import UserStats from "./components/UserStats";

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
          <UserAccount balance={formatCurrency(overview.balance)} />
          <UserStats overview={overview} />
        </div>
      </Dashboard>
    </>
  );
};

export default UserOverview;
