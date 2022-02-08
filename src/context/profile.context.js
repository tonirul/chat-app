import React, { createContext, useContext, useState } from "react";


const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);

  return(
      <profileContext.Provider value={profile}>
        {children}
      </profileContext.Provider>
    );
};

export const useProfile = () => useContext(profileContext);