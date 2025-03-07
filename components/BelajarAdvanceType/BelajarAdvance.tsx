import { BelajarAdvanceTypeProps } from "./BelajarAdvanceTypeProps.type";

export const BelajarAdvance = (props: BelajarAdvanceTypeProps) => {
  return (
    <>
      <p>Name : {props.data.name}</p>
      <p>Status : {props.data.status}</p>
      <p>Login : {props.data.isLogin ? "Login" : "Log Out"}</p>
    </>
  );
};
