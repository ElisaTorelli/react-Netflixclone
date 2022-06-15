import React from 'react'
import styles from './navbar.module.css';
import logoImg from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/searchIcon.png';
import ringBellIcon from '../../assets/images/RingbellIcon.png';
import profileIcon from '../../assets/images/ProfileIMG.png';
import dropDownIcon from '../../assets/images/dropDownIcon.png';


const Navbar = () => {
  return (
    // HEADER
    <div className={styles['main-header']}>
      <div className={styles.navbar}>

        {/* LEFT HEADER LINKS LIST */}
        <div className={styles.left__header__links}>
          <div className={styles.netflix__logo}>
            <a href='home-page.html' title='homepage'>
              <img className={styles.logo} src={logoImg} alt="netflixlogo" />
            </a>
          </div>
          <ul>
            <li><a href="home-page.html" title="item__link">Home</a></li>
            <li><a href="home-page.html" title="item__link">Serie TV</a></li>
            <li><a href="home-page.html" title="item__link">Film</a></li>
            <li><a href="home-page.html" title="item__link">Nuovi e popolari</a></li>
            <li><a href="home-page.html" title="item__link">Audio e sottotitoli</a></li>
          </ul>
        </div>

        {/* RIGHT HEADER LINKS LIST */}
        <div className={styles.right__header__links}>
          <ul>
            <li><a href="#home-page.html" title="img"><img src={searchIcon} alt="searchIcon" className={styles['profile__img search-icon']}></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={ringBellIcon} alt="ringbellIcon" className={styles['profile__img ringbell-icon']}></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={profileIcon} alt="profileIcon" className={styles.profile__img} id="profile-icon"></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={dropDownIcon} alt="dropDownIcon" className={styles.profile__img} dropdown-icon></img></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;