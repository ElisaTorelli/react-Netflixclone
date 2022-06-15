import styles from './rowPoster.module.css';
import Poster from '../Poster/Poster';
import { getImg } from '../../commons/API';



const RowPoster = () => {
    return (
    // ROW POSTER
    <div className={styles['row-poster']}> 
        <h3 className={styles['poster__title']}>Originali Netflix</h3>
        {/* CARDS */}
        <div className={styles['cards invisible-scrollbar']}>
                <button className={`${styles.freccia} ${styles.right} ${styles.poster}`}>
                    <img src={getImg('Vector-right.png')} alt="Destra" />
                </button>
                <button className={`${styles.freccia} ${styles.left} ${styles.poster}`}>
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