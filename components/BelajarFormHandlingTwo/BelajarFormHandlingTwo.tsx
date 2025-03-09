import { useState } from "react";

export const BelajarFormHandlingTwo = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const handlingFirstName = (event: any) => {
    setName({ ...name, firstname: event.target.value });
  };
  const handlingLastName = (event: any) => {
    setName({ ...name, lastname: event.target.value });
  };
  return (
    <>
      <div>
        <p>First Name : {name.firstname}</p>
        <input id="firstName" name="firstName" onChange={handlingFirstName} />
      </div>
      <div>
        <p>Last Name : {name.lastname}</p>
        <input id="lastname" name="lastname" onChange={handlingLastName} />
      </div>
    </>
  );
};
