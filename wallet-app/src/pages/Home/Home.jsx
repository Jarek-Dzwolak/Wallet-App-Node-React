import React, { useState, useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import IncomeExpenseTable from '../../components/IncomeExpenseTable/IncomeExpenseTable';
import PopUpBtn from '../../components/PopUpBtn/PopUpBtn';
import Curriences from '../../components/Curriences/Curriences';
import Styles from './Home.module.css';

// function Home() {
//   return (
//     <div className={Styles.balance}>
//       <Header />
//       <Navigation />
//       <Balance />
//       <Curriences />
//       <IncomeExpenseTable />
//       <PopUpBtn />
//     </div>
//   );
// }

// export default Home;
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

  const shouldRenderCurriences = windowWidth >= 768;

  return (
    <div className={Styles.balance}>
      <Header />
      {shouldRenderCurriences ? (
        <div className={Styles.tabletViewBox1}>
          <div className={Styles.tabletViewBox2}>
            <Navigation />
            <Balance />
          </div>
          <div className={Styles.tabletViewBox3}>
            <Curriences />
          </div>
        </div>
      ) : (
        <Navigation />
      )}
      <IncomeExpenseTable />
      <PopUpBtn />
    </div>
  );
}

export default Home;
