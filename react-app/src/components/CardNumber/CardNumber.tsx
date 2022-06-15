import React from "react";
import styles from "./cardnumber.module.css";

// let numberArray = [
//   "./assets/images/Movie1.png",
//   "./assets/images/Movie2.png",
//   "./assets/images/Movie3.png",
//   "./assets/images/Movie4.png",
//   "./assets/images/Movie1.png",
//   "./assets/images/Movie2.png",
//   "./assets/images/Movie3.png",
//   "./assets/images/Movie4.png",
//   "./assets/images/Movie1.png",
//   "./assets/images/Movie2.png",
// ];

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
