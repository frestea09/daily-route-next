import { useState } from "react";

export const BelajarFormHandling = () => {
  const [name, setName] = useState("");
  const handlingName = (event: any) => {
    setName(event.target.value);
  };
  return (
    <>
      <div>
        <label>First Name : {name}</label>
        <br />
        <input id="firstName" name="firtName" onChange={handlingName} />
      </div>
    </>
  );
};
