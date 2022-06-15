import React from 'react'
import styles from './dialog.module.css'

let arMovie = [{titolo:"Questione di chimica",duration:"58",synopsis:"Dopo la diagnosi di cancro terminale ai polmoni, un insegnante di chimica del liceo si dà alla produzione di metanfetamine per garantire la sopravvivenza della  famiglia."},
{titolo:"Senza ritorno",duration:"48",synopsis:"Il primo traffico di droga fallito costringe Walt e Jesse a sbarazzarsi di un paio di cadaveri. Nel frattempo, Skyler sospetta che il marito sia sulla cattiva strada."},
{titolo:"Conseguenze radicali",duration:"48",synopsis:"Mentre Walt rimette le cose a posto dopo il primo traffico di droga, Skyler è vicinissima a scoprire la verità sulla sua doppia vita."},
{titolo:"Una malattia scomoda",duration:"48",synopsis:"Costretto a rivelare la verità sulla malattia che lo affligge, Walt si chiede come pagare i costosi trattamenti contro il cancro ai quali si deve sottoporre."},
{titolo:"Materia grigia",duration:"48",synopsis:"Skyler cerca di convincere Walt ad accettare la generosa offerta di un ex migliore amico disposto a pagargli le cure per il cancro."},
{titolo:"Un pugno di mosche",duration:"48",synopsis:"Per finanziare le crescenti spese mediche del suo trattamento, Walt chiede a Jesse di trovare un acquirente per la droga. Per farlo, Jesse si mette nei guai."},
{titolo:"Vendetta",duration:"47",synopsis:"Una volta che Jesse è scampato alla morte, Walt accetta di produrre ancor più droga per lo spietato Tuco. Nel frattempo, Skyler sospetta la sorella di cleptomania."}];

let arSelection = [{value:"stagione1",option:"Stagione 1"},
{value:"stagione2",option:"Stagione 2"},
{value:"stagione3",option:"Stagione 3"},
{value:"stagione4",option:"Stagione 4"},]

const Dialog = () => {
  return (
    <div className={styles.container}>
        <div className={styles.space}>
            <div className={styles.top}>
                <h3>Episodi</h3>
                <div className={styles.shows}>
                    <select name='show' id='show' className={styles.show}>
                      {
                        arSelection.map((item,index) =>{
                          return(
                            <option value={item.value}>{item.option}</option>
                          )
                        })
                      }
                    </select>
                </div> 
            </div>
            <div className={styles.mid} id='mid'>
              {
                arMovie.map((item,index) =>{
                  return(
                    <div key={'movie'+index} className={styles.episode}>
                    <h3>{index+1}</h3>
                    <img src={require('../../assets/images/New-amsterdam.png')} alt='CardImage'/>
                    <div className={styles.description}>
                        <h4>{item.titolo}</h4>
                        <p>{item.duration}min</p>
                        <p>{item.synopsis}
                        </p>
                    </div>
                </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Dialog
