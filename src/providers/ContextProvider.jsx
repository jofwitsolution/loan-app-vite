import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import apiClient from "../services/api-client";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [session, setSession] = useState("");

  useEffect(() => {
    setSession(Cookies.get("session"));
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await apiClient.get("/users/current-user", {
          withCredentials: true,
        });
        setCurrentUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };

    if (session) getProfile();
  }, [session]);

  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser, session }}>
      {children}
    </GlobalContext.Provider>
  );
};
