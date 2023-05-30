import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  let [showbullet, setShowbullet] = useState(true);
  let [randBackground, setRandBackground] = useState(true);
  let [maincolor, setcolor] = useState("#FF9800");
  const activeBullets = () => {
    setShowbullet(true);
  };
  const activeBackground = () => {
    setRandBackground(true);
  };
  const offBullets = () => {
    setShowbullet(false);
  };
  const offBackground = () => {
    setRandBackground(false);
  };
  const setmaincolor = (c) => {
    setcolor(c);
  };
  return (
    <AppContext.Provider
      value={{
        activeBackground,
        offBackground,
        activeBullets,
        offBullets,
        showbullet,
        randBackground,
        setmaincolor,
        maincolor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
