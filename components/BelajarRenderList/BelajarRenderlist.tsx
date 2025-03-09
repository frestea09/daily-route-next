import { BelajarRenderListProps } from "./BelajarRenderListProps.type";

export const BelajarRenderList = ({ data }: BelajarRenderListProps) => {
  const displayData = data.map((item) => (
    <div key={item.name}>
      <p>{item.name}</p>
    </div>
  ));
  return <>{displayData}</>;
};
