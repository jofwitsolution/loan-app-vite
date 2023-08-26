import React, { useContext } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from "./DashboardMenu";
import { GlobalContext } from "../../providers/ContextProvider";
import DashboardRight from "./DashboardRight";

const Dashboard = ({ children }) => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <div className="bg-gray-cus-1 flex min-h-screen">
      <div className="w-[18%] shadow-lg bg-white">
        <DashboardMenu currentUser={currentUser} />
      </div>
      <div className="w-[82%]">
        <DashboardHeader currentUser={currentUser} />
        <div className="flex gap-[22px] px-[22px] pt-[30px]">
          <div className="w-[70%]">{children}</div>
          <div className="w-[30%]">
            <DashboardRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
