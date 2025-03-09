import { useCallback, useMemo, useState } from "react";

export const BelajarUseCallBack = () => {
  const [umur, setUmur] = useState(0);
  const handlingTambahUmur = useCallback(() => {
    setUmur(umur + 1);
  }, [umur]);
  const isEvent = useMemo(() => umur % 2, [umur]);
  return (
    <>
      <p>
        Umur : {umur} {isEvent ? "umur ganjil" : "Umur genap"}
      </p>
      <button onClick={handlingTambahUmur}>Tambah</button>
    </>
  );
};
