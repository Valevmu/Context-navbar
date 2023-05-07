import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { FormWrapper } from "./FormWrapper";
import UserContext from "../context/UserContext";

export const Wrapper = ({ children }) => {
  const [name, setName] = useState("Valentina");
  return (
    <UserContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
