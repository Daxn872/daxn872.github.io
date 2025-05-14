
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const companyName = "NoneLimits";
  const whopLink = 'https://whop.com/nonelimits';

  const redirectToWhop = () => {
    window.open(whopLink, '_blank');
  };

  return (
    <AppContext.Provider value={{ companyName, whopLink, redirectToWhop }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
