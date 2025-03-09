import { useState } from "react";

export const BelajarStateBasic = () => {
  const [login, setLogin] = useState(false);
  const handlingLogin = () => {
    setLogin(true);
  };
  const handlingLogout = () => {
    setLogin(false);
  };
  return (
    <>
      <p>Status : {login ? "Login" : "Logout"}</p>
      <button onClick={handlingLogin}>Login</button>
      <button onClick={handlingLogout}>Logout</button>
    </>
  );
};
