import React from "react";
import styles from "./index.module.css";

function Product({
  title,
  price,
  category,
  image,
  discount,
  badge,
  quantity,
  rate,
}) {
  const finalPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price;

  return (
    <div className={styles.view}>
      {badge && <p className={styles.badge}>{badge}</p>}
      <img src={image} alt="Product Image" className={styles.image} />
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.category}>{category}</p>
      <p className={styles.rate}>
        <i
          className="fas fa-star"
          style={{ color: "yellow", marginRight: "5px" }}
        ></i>
        {rate}
      </p>
      <p className={styles.quantity}>{quantity} bought in past month</p>

      <p className={discount ? styles.finalPrice : styles.price}>${finalPrice}</p>
      {discount && <p className={styles.originalprice}>$ {price}</p>}
      {discount && <p className={styles.discount}>{discount} %</p>}
    </div>
  );
}

export default Product;
