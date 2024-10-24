import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./product.module.css";

function Product() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Gửi yêu cầu đến backend
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="">
      <h1>Data from Backend:</h1>
      <p>{data}</p>
    </div>
  );
}

export default Product;
