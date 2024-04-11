import React, { useContext, useState } from "react";

const appContext = React.createContext();

const AppProvider = ({ children }) => {

const [isSidebarOpen, setIsSidebarOpen] =useState(false)
const [isModalOpen, setIsModalOpen] =useState(false)


const openSidebar = () => {
    setIsSidebarOpen(true)
}
const closeSidebar = () => {
    setIsSidebarOpen(false)
}

const openModal = () => {
    setIsModalOpen(true)
}
const closeModal = () => {
    setIsModalOpen(false)
}




  return <appContext.Provider value={{
    isModalOpen,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    openModal,
    closeModal
  }}>{children}</appContext.Provider>;
};

//custom hook
export const useGlobalContext = () => {
  return useContext(appContext);
};

export { appContext, AppProvider };
