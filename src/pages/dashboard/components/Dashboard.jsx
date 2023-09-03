import React, { useContext, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from "./DashboardMenu";
import { GlobalContext } from "../../../providers/ContextProvider";
import DashboardRight from "./DashboardRight";

const Dashboard = ({ children }) => {
  const { currentUser } = useContext(GlobalContext);

  const [isTabMenu, setTabMenu] = useState(false);

  return (
    <div className="bg-gray-cus-1 flex min-h-screen">
      <div
        className={`${
          isTabMenu
            ? "fixed top-0 left-0 z-[100] w-[80%] xs:w-[60%] md:w-[40%] lg:w-[25%]"
            : "hidden lg:block w-[25%]"
        } lg:static xl:w-[18%] shadow-lg bg-white`}
      >
        <DashboardMenu currentUser={currentUser} />
      </div>
      <div className="w-full lg:w-[75%] xl:w-[82%]">
        <DashboardHeader
          currentUser={currentUser}
          toggleMenu={() => setTabMenu(!isTabMenu)}
        />
        <div className="flex gap-[22px] px-[18px] sm:px-[22px] pt-[30px]">
          <div className="w-full xl:w-[70%]">{children}</div>
          <div className="w-[30%] hidden xl:block">
            <DashboardRight currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
