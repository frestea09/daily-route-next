import { BelajarPropsType } from "./BelajarProps.type";

export const BelajarProps = (props: BelajarPropsType) => {
  return (
    <>
      <p>Name : {props.name}</p>
      <p>Super Hero : {props.superHeroName}</p>
    </>
  );
};
