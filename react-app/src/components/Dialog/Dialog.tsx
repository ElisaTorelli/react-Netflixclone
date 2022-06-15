import React from 'react'
import styles from './dialog.module.css'

const Dialog = () => {
  return (
    <div className={styles.container}>
        <div className={styles.space}>
            <div className={styles.top}>
                <h3>Episodi</h3>
                <div className={styles.shows}>
                    <select name='show' id='show' className={styles.show}>
                        <option value='stagione1'>Stagione 1</option>
                        <option value='stagione2'>Stagione 2</option>
                        <option value='stagione3'>Stagione 3</option>
                        <option value='stagione4'>Stagione 4</option>
                    </select>
                </div> 
            </div>
            <div className={styles.mid} id='mid'>
                <div className={styles.episode}>
                    <h3>1</h3>
                    <img src={require('../../assets/images/New-amsterdam.png')} alt='CardImage'/>
                    <div className={styles.description}>
                        <h4>Questione di chimica</h4>
                        <p>58min</p>
                        <p>Dopo la diagnosi di cancro terminale ai polmoni, un insegnante di chimica del
                            liceo si da alla produzione di metanfetamina per garanatire la sopravivvenza della
                            famiglia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dialog