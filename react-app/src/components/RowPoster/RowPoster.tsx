import React, { useState, useEffect } from "react";
import styles from "./rowposter.module.css";
import Poster from "../Poster/Poster";
import { getImg } from "../../commons/API";
import { IMovie } from "../../commons/IResult";

interface IRow {
  title: string;
  movieList: Array<IMovie> | [];
}

const RowPoster: React.FC<IRow> = ({ title, movieList }) => {
  return (
    // ROW POSTER
    <div className={styles["row-poster"]}>
      <h3 className={styles["poster__title"]}>{title}</h3>
      {/* CARDS */}
      <div>
        <button
          className={`${styles.freccia} ${styles.right} ${styles.poster}`}
        >
          <img src={getImg("Vector-right.png")} alt="Destra" />
        </button>
        <button className={`${styles.freccia} ${styles.left} ${styles.poster}`}>
          <img src={getImg("Vector-left.png")} alt="Sinistra" />
        </button>
        <div className={styles["row-poster-container"]}>
          {movieList.map((movie: IMovie, index: number) => {
            return (
              <React.Fragment key={`movie${index}`}>
                <Poster movie={movie} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RowPoster;
