import { useEffect, useState } from "react";
import axios from "axios";
export const BelajarUserEffect = () => {
  const [data, setData] = useState();
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <p>Hello Wolrd</p>
    </>
  );
};
