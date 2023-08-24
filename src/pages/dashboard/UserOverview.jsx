import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import Cookies from "js-cookie";

const UserOverview = () => {
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
      <div className="w-[18%] shadow-md bg-white">Menu</div>
      <div className="w-[82%]">
        {/* Header */}
        <div className="h-[96px] shadow bg-white px-[40px] flex items-center justify-between">
          <div className="w-[65%]">
            <form className="h-[50px]">
              <input
                type="text"
                className="w-full h-full border-gray-400 border-[2px] rounded-[12px] pl-[50px]"
              />
            </form>
          </div>
          <div className="flex gap-[30px]">
            <div>Bell Icon</div>
            <div className="flex gap-[15px]">
              <span>Avatar</span>
              <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
            </div>
          </div>
        </div>
        {/*End of Header */}
        <div>Main</div>
      </div>
    </div>
  );
};

export default UserOverview;
