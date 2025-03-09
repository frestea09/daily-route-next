import { BelajarDestructionProps } from "./BelajarDesctructionProps.type";

export const BelajarDesctrictionProps = ({
  age,
  name,
}: BelajarDestructionProps) => {
  return (
    <>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
    </>
  );
};
