import React, { createContext, useContext, useEffect, useState } from "react";




const NavSwichContext = createContext();

export const NavSwitch = ()=>{
    const [activateSignIn,setActivateSignIn] = useState(false);
    const [currentPage,setCurrentPage] = useState("");

return {activateSignIn,setActivateSignIn,currentPage,setCurrentPage}
}

export const NavSwitchProvider = ({ children }) => {
    const navSwitchValue = NavSwitch();
  
    return <NavSwichContext.Provider value={navSwitchValue}>{children}</NavSwichContext.Provider>;
  };

  export const useNavSwitch = () => useContext(NavSwichContext);