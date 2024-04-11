import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppConterxt = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenu] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const opneSubmenu = () => {
    setIsSubmenu(true);
  };

  const closeSubmenu = () => {
    setIsSubmenu(false);
  };

  return (
    <AppConterxt.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        opneSubmenu,
        openSidebar,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppConterxt.Provider>
  );
};


export const useGlobalContext = () => {
    return useContext(AppConterxt)
}