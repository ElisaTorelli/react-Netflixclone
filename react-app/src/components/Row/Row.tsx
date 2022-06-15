import React from "react";
import Card from "../Card/Card";
import styles from "./row.module.css";
import { getImg } from "../../commons/API";

const Row = () => {
  return (
    <div className={styles["row"]}>
      <h3>Popolari su Netflix</h3>
      <div className={`${styles.cards} ${styles.invisiblescrollbar}`}>
        <button className={`${styles.freccia} ${styles.right}`}>
          <img src={getImg("Vector-right.png")} alt="destra" />
        </button>
        <button className={`${styles.freccia} ${styles.left}`}>
          <img src={getImg("Vector-left.png")} alt="sinistra" />
        </button>
        <div className={styles["poster-container"]}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Row;
