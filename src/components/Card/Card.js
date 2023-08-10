import React from "react";
import styles from "./Card.module.css";
const Card = ({ id, Name, Age, Address, Phone, type, deleteFunc }) => {
  return (
    <div
      className={styles.cardWrapper}
      //   key={id}
      style={{ backgroundColor: type === "girl" ? "pink" : "green" }}
    >
      <p>Name: {Name}</p>
      <p>Age: {Age}</p>
      <p>Address: {Address}</p>
      <p>Phone: {Phone}</p>
      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, id)}
      >
        x
      </div>
    </div>
  );
};

export default Card;
