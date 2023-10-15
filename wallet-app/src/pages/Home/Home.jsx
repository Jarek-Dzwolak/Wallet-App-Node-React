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
import TransactionModal from '../../components/TransactionModal/TransactionModal';
import plus from '../../icons/plus.svg';
import EditModal from '../../components/EditModal/EditModal';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);
  const [balance, setBalance] = useState(
    JSON.parse(localStorage.getItem('transactions')) || [],
  );
  window.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      setBalance(JSON.parse(localStorage.getItem('transactions')) || []);
    }
  });
  // localStorage.setItem(
  //   'transactions',
  //   JSON.stringify([
  //     {
  //       Date: '04.01.19',
  //       Type: '-',
  //       Category: 'Other',
  //       Comment: 'Comment',
  //       Sum: '300.00',
  //     },
  //     {
  //       Date: '03.01.11',
  //       Type: '-',
  //       Category: 'Other',
  //       Comment: 'Comment',
  //       Sum: '500.00',
  //     },
  //     {
  //       Date: '01.01.30',
  //       Type: '+',
  //       Category: 'Other',
  //       Comment: 'Comment',
  //       Sum: '20.00',
  //     },
  //     {
  //       Date: '04.01.09',
  //       Type: '-',
  //       Category: 'Other',
  //       Comment: 'Comment',
  //       Sum: '300.00',
  //     },
  //     {
  //       Date: '03.01.11',
  //       Type: '+',
  //       Category: 'Other',
  //       Comment: 'Comment',
  //       Sum: '5010.00',
  //     },
  //     {
  //       Date: '01.01.30',
  //       Type: '+',
  //       Category: 'ather',
  //       Comment: 'Comment',
  //       Sum: '20.00',
  //     },
  //   ]),
  // );

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
      <TransactionModal open={openModal} onClose={() => setOpenModal(false)} />
      <Header />
      <div className={Styles.bg}></div>

      {showTabletView ? (
        <div>
          <img className={Styles.elipse1} src={elipse1} alt="elipse orange" />
          <img className={Styles.elipse2} src={elipse2} alt="elipse purple" />
          <div className={Styles.tabletViewBox1}>
            <div className={Styles.tabletViewBox2}>
              <Navigation />
              <Balance balance={balance} />
            </div>
            <div className={Styles.tabletViewBox3}>
              <Curriences />
            </div>
          </div>
          <div>
            <IncomeExpenseTable />
            <div className={Styles.btn}>
              <img
                src={plus}
                onClick={() => setOpenModal(true)}
                className={Styles.icon}
                alt="plus icon"
              />
            </div>
          </div>
        </div>
      ) : showDesktopView ? (
        <div className={Styles.desktopViewBox1}>
          <div className={Styles.bg}></div>
          <img className={Styles.elipse1} src={elipse1} alt="elipse orange" />
          <img className={Styles.elipse2} src={elipse2} alt="elipse purple" />
          <div className={Styles.desktopViewBox2}>
            <Navigation />
            <Balance balance={balance} />
            <Curriences />
          </div>
          <div>
            <IncomeExpenseTable />
            <div className={Styles.btn}>
              <img
                src={plus}
                onClick={() => setOpenModal(true)}
                className={Styles.icon}
                alt="plus icon"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={Styles.bg}></div>
          <Navigation />
          <Balance balance={balance} />
          <IncomeExpenseTable />
          <div className={Styles.btn}>
            <img
              src={plus}
              onClick={() => setOpenModal(true)}
              className={Styles.icon}
              alt="plus icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
