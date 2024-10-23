import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./main.module.css"; // Đảm bảo file CSS được import

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu đến backend
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setData(response.data); // Thay đổi state 'data' thành dữ liệu trả về từ backend
        } else {
          console.error("API không trả về mảng như mong đợi!");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // [] đảm bảo useEffect chỉ chạy 1 lần sau khi render component

  return (
    <div className={css.container}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className={css.card}>
            <div className={css.card__Header}>
              <h1>{item.title}</h1>
            </div>
            <div className={css.card__Image}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className={css.card__Content}>
              <h2>{item.subheading}</h2>
              <p>{item.content}</p>
            </div>
            <div className={css.card__Actions}>
              <button className={css.btn}>Action 1</button>
            </div>
          </div>
        ))
      ) : (
        <p>Không có dữ liệu để hiển thị!</p>
      )}
    </div>
  );
};

export default Main;
