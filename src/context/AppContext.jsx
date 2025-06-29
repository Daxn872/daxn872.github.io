import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const companyName = "NoneLimits";
  
  const redirectToWhop = () => {
    window.location.href = "https://whop.com/checkout/plan_NsE1AAyLjs18Z/";
  };

  const value = {
    companyName,
    redirectToWhop
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};