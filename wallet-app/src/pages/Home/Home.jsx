import React, { useState, useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import IncomeExpenseTable from '../../components/IncomeExpenseTable/IncomeExpenseTable';
import PopUpBtn from '../../components/PopUpBtn/PopUpBtn';
import Curriences from '../../components/Curriences/Curriences';
import Styles from './Home.module.css';
import elipse1 from '../../icons/elipse1.svg';
import elipse2 from '../../icons/elipse2.svg';

function Home() {
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

  const showTabletView = windowWidth >= 768 && windowWidth < 1280;
  const showDesktopView = windowWidth >= 1280;

  return (
    <div className={Styles.balance}>
      <Header />
      {showTabletView ? (
        <div>
          <div className={Styles.bg}></div>
          <img className={Styles.elipse1} src={elipse1} alt="elipse orange" />
          <img className={Styles.elipse2} src={elipse2} alt="elipse purple" />
          <div className={Styles.tabletViewBox1}>
            <div className={Styles.tabletViewBox2}>
              <Navigation />
              <Balance />
            </div>
            <div className={Styles.tabletViewBox3}>
              <Curriences />
            </div>
          </div>
          <div>
            <IncomeExpenseTable />
            <PopUpBtn />
          </div>
        </div>
      ) : showDesktopView ? (
        <div className={Styles.desktopViewBox1}>
          <div className={Styles.bg}></div>
          <img className={Styles.elipse1} src={elipse1} alt="elipse orange" />
          <img className={Styles.elipse2} src={elipse2} alt="elipse purple" />
          <div className={Styles.desktopViewBox2}>
            <Navigation />
            <Balance />
            <Curriences />
          </div>
          <div>
            <IncomeExpenseTable />
            <PopUpBtn />
          </div>
        </div>
      ) : (
        <div>
          <div className={Styles.bg}></div>
          <Navigation />
          <Balance />
          <IncomeExpenseTable />
          <PopUpBtn />
        </div>
      )}
    </div>
  );
}

export default Home;
