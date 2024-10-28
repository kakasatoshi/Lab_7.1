import React, { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(`Submit`);
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    fetch("http://localhost:5000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => {
        console.error("Error:", err);
      });
    // You can add more logic for form submission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles["form-control"]}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
