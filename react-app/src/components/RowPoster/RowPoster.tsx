import styles from './rowposter.module.css';
import rightArrow from "../../assets/images/Vector-right.png";
import leftArrow from "../../assets/images/Vector-left.png";
import Poster from '../Poster/Poster';
import { getImg } from '../../commons/API';


// let posterArray = ['./assets/images/poster1.png', './assets/images/poster2.png', './assets/images/poster3.png', './assets/images/poster4.png'];



const RowPoster = () => {
    return (
    // ROW POSTER
    <div className={styles['row-poster']}> 
        <h2 className={styles['poster__title']}>Originali Netflix</h2>
        {/* CARDS */}
        <div className={styles['cards invisible-scrollbar']}>
                <button className={styles[`${styles.freccia} ${styles.right} poster`]}>
                    <img src={getImg('Vector-right.png')} alt="Destra" />
                </button>
                <button className={styles["freccia left poster"]}>
                    <img src={getImg('Vector-left.png')} alt="Sinistra" />
                </button>
                <div className={styles["row-poster-container"]}>
                    <Poster />
                </div>
            </div>
    </div>
    )
}
export default RowPoster