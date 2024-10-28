import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./main.module.css"; // Ensure the CSS file is imported

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Send request to backend
    axios
      .get("http://localhost:5000/api/product")
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setData(response.data); // Update 'data' state with the response from the backend
        } else {
          console.error("API did not return an array as expected!");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // [] ensures useEffect only runs once after the component renders

  return (
    <main className={styles.main}>
      {/* <header className={styles.mainHeader}>
        <nav className={styles.mainHeader__nav}>
          <ul className={styles.mainHeader__itemList}>
            <li className={styles.mainHeader__item}>
              <a href="/" className={styles.active}>Home</a>
            </li>
            <li className={styles.mainHeader__item}>
              <a href="/about">About</a>
            </li>
            <li className={styles.mainHeader__item}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header> */}

      <section className={styles.grid}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.card__header}>
                <h1>{item.title}</h1>
              </div>
              <div className={styles.card__image}>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className={styles.card__content}>
                <h2> ${item.price}</h2>
                <p>{item.description}</p>
              </div>
              <div className={styles.card__actions}>
                <button className={styles.btn}>Add To Cart</button>
              </div>
            </article>
          ))
        ) : (
          <p>No data available</p>
        )}
      </section>
    </main>
  );
};

export default Main;
