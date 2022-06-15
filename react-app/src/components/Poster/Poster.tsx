import React from 'react';
import styles from './poster.module.css';
import posterImg from '../../assets/images/Movie1.png';


const Poster = () => {
  return (
    // POSTER
    <div className={styles['card-container']}>
      <div className={styles['card-poster']}>
        <img className={styles['poster-img']} src={posterImg} alt="posterImg" />
      </div>
    </div>
  )
}
export default Poster