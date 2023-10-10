import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import email from '../../icons/email.svg';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../icons/home.svg';
import curriencesIcon from '../../icons/currency.svg';
import diagramIcon from '../../icons/diagram.svg';
import './Navigation.css';
import Home from '../../pages/Home/Home';

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Dodaj listener do śledzenia zmiany szerokości ekranu
    window.addEventListener('resize', handleResize);

    // Wywołaj funkcję po pierwszym renderowaniu komponentu
    handleResize();

    // Usuń listener po zniszczeniu komponentu
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Pusta tablica zależności, aby efekt useEffekt wykonał się tylko raz

  const shouldRenderNavigationItem = windowWidth <= 768;

  return (
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <NavLink className={styles.link} to="/home">
          <img
            className={styles.navigationIcon}
            src={homeIcon}
            alt="home nav icon"
          ></img>{' '}
          {!shouldRenderNavigationItem && (
            <span className={styles.navigationName}>Home</span>
          )}
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink className={styles.link} to="/statistic">
          <img
            className={styles.navigationIcon}
            src={diagramIcon}
            alt="statistic nav icon"
          ></img>
          {!shouldRenderNavigationItem && (
            <span className={styles.navigationName}>statistics</span>
          )}
        </NavLink>
      </li>
      {shouldRenderNavigationItem ? (
        <li className={styles.navigationItem}>
          <NavLink className={styles.link} to="/currencies">
            <img
              className={styles.navigationIcon}
              src={curriencesIcon}
              alt="currencies nav icon"
            />
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
}

export default Navigation;
