import { BelajarMethodProps } from "./BelajarMethodProps.type";

export const BelajarMethodProp = ({ methodHello }: BelajarMethodProps) => {
  return (
    <>
      <button onClick={methodHello}>Say Hello</button>
    </>
  );
};
