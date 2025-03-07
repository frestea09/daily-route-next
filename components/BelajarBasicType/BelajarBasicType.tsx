import { BelajarBasicPropsType } from "./BelajarBasiProps.type";
export const BelajarBasicType = ({ data }: BelajarBasicPropsType) => {
  return (
    <>
      <p>Name : {data?.name} </p>
      <p>Age : {data?.age}</p>
      <p>Is Login : {data?.isLogin ? "Login" : "Tidak Login"}</p>
    </>
  );
};
