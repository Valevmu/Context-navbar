import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export const Form = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <form className="form">
        <label> Your name: </label> {""}
        <input
          placeholder="Valentina"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
