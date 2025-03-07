import { BelajarBasicTypeTwoProps } from "./BelajarBasicTypeTwoProps.type";

export const BelajarBasicTypeTwo = ({ data }: BelajarBasicTypeTwoProps) => {
  const displayData = data.map((item) => {
    return (
      <div key={item?.name}>
        <p>Name : {item?.name}</p>
        <p>Age : {item?.age}</p>
      </div>
    );
  });
  return <>{displayData}</>;
};
