import { useState } from "react";
type dataUser = {
  username: string;
  age: number;
};
export const BelajarAssertenState = () => {
  const [angka, setAngka] = useState(0);
  const [dataUser, setDataUser] = useState<dataUser | null>();
  const handlingAngka = () => {
    setAngka(angka + 1);
  };
  const handlingDataUser = () => {
    setDataUser({ age: 13, username: "ilman" });
  };
  return (
    <>
      <div>
        <p>Name : {dataUser?.username}</p>
        <p>Age : {dataUser?.age}</p>
      </div>
      <p>Angka : {angka}</p>
      <button onClick={handlingAngka}>Tambah</button>
      <button onClick={handlingDataUser}>Tambah User</button>
    </>
  );
};
