import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export const Navbar = () => {
  const { name } = useContext(UserContext);

  return <nav className="nav">Hi {name}!</nav>;
};
