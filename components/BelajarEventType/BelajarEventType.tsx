"use client";

import { BelajarEventTypeProps } from "./BelajarEventTypeProps.type";

export const BelajarEventType = (props: BelajarEventTypeProps) => {
  return (
    <>
      <button className="bg-black" onClick={props.handleEvenet}>
        Tambahkan
      </button>
    </>
  );
};
