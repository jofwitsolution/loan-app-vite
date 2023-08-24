import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import Cookies from "js-cookie";
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from "./DashboardMenu";

const Dashboard = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await apiClient.get("/users/current-user", {
          withCredentials: true,
        });
        setCurrentUser(data.user);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="bg-gray-cus-1 flex min-h-screen">
      <div className="w-[18%] shadow-md bg-white">
        <DashboardMenu />
      </div>
      <div className="w-[82%]">
        <DashboardHeader currentUser={currentUser} />
        <div>
          <div>{children}</div>
          <div>Right Layout</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
