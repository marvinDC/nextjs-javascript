import React, { createContext, useState } from "react";

export const homeContext = createContext({});

const HomeProvider = ({ children }) => {
  const [name, setName] = useState("Next JS app");

  const values = {
    name,
    setName,
  };

  return <homeContext.Provider value={values}>{children}</homeContext.Provider>;
};

export default HomeProvider;
