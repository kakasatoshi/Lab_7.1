import React from "react";
import styles from "./product.module.css";

const Product = (props) => {
   // Props passed from parent component: title, image, price, description
   // Add your code here to render the product component with the given props.
    // Use CSS modules to style the component.
    // Ensure the CSS file is imported and used appropriately.
    // Add any additional functionality or features to enhance the product component.
    // Return the rendered product component.
    // Example:
    // <div className={styles["product-item"]}>
    //   <h2 className={styles["product__title"]}>{props.title}</h2>
    //   <img src={props.image} alt={props.title} />
    //   <p className={styles["product__price"]}>{props.price}</p>
    //   <p className={styles["product__description"]}>{props.description}</p>
    //   <form className={styles["product-form"]}>
    //     <button type="submit">Add to Cart</button>
    //   </form>
    // </div>
    
  return (
      <div className={styles["product-item"]}>
      <h2 className={styles["product__title"]}>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p className={styles["product__price"]}>{props.price}</p>
      <p className={styles["product__description"]}>{props.description}</p>
      <form className={styles["product-form"]}>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default Product;
