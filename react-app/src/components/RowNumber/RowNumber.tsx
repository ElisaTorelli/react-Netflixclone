import React from "react";
import { getImg } from "../../commons/API";
import CardNumber from "../CardNumber/CardNumber";
import styles from "./rownumber.module.css";

const RowNumber = () => {
  return (
    <div className={styles["row-number"]}>
      <h3 className={styles["top10"]}>La top 10 di oggi in Italia</h3>
      <div>
        <button
          className={`${styles.freccia} ${styles.right} ${styles.number}`}
        >
          <img src={getImg("Vector-right.png")} alt="Destra" />
        </button>
        <button className={`${styles.freccia} ${styles.left} ${styles.number}`}>
          <img src={getImg("Vector-right.png")} alt="Sinistra" />
        </button>
        <div className={styles["container-row"]}>
          <CardNumber />
        </div>
      </div>
    </div>
  );
};

export default RowNumber;
