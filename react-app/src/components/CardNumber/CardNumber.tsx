import React from "react";
import styles from "./cardnumber.module.css";

const CardNumber = () => {
  return (
    <div className={styles["container-movie"]}>
      <span className={styles["number-movie"]}>1</span>
      <div className={styles["movie"]}>
        <img className={styles["img-number"]} src="" alt="movie1" />
      </div>
    </div>
  );
};
export default CardNumber;
