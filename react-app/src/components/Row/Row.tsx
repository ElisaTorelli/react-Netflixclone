import styles from "./row.module.css"


const Row = () => {
  return (
    <div>
      {/* -- LAST SECTION LINKS  */}
      <footer className="footer">
        {/* -- SOCIAL MEDIA ICONS  */}
        <div className="last__section__image">
          {/* <img src="./assets/images/Social.png" alt="social logo img"> */}
        </div>

        <div className="footer-cols">
          <ul>
            <li><a href="#">Autodescrizione</a></li>
            <li><a href="#">Rapporti con gli investitori</a></li>
            <li><a href="#">Note legali</a></li>
            <li><a href="#">Bize ulasin</a></li>
            {/* <li><a href="#" id="gray_box"><img src="./assets/images/grayBorder.png" alt="gray icon"></a></li> */}
          </ul>
          <ul className="second_link">
            <li><a href="#">Centro assistenza</a></li>
            <li><a href="#">Opportunità di lavoro</a></li>
            <li><a href="#">Preferenze per i cookie</a></li>
          </ul>
          <ul className="second_link">
            <li><a href="#">Carte Regalo</a></li>
            <li><a href="#">Condizioni di utilizzo</a></li>
            <li><a href="#">Informazioni sull'azienda</a></li>
          </ul>
          <ul className="second_link">
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contattaci</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Row