import { BelajarConditionRenderProps } from "./BelajarConditionRenderProps";

export const BelajarConditionRender = ({
  data,
}: BelajarConditionRenderProps) => {
  const displayData = data.isLogin ? <p>Berhasil</p> : <p>Tidak berhasil</p>;
  return (
    <>
      {displayData}
      <button onClick={data.handlingLogin}>Change Status</button>
    </>
  );
};
