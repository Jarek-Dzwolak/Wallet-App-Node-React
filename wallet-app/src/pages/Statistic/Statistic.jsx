import React, { useState, useMemo, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ChartComponent from '../../components/Chart/Chart';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import CategoryItem from '../../components/Category/CategoryItem';
import Balance from '../../components/Balance/Balance';
import Curriences from '../../components/Curriences/Curriences';
import css from './Statistic.module.css';
import elipse1 from '../../icons/elipse1.svg';
import elipse2 from '../../icons/elipse2.svg';

const accountBalanceKey = 'accountBalance';
const expensesKey = 'expenses';

function Statistic() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const categoryData = useMemo(() => [
    { category: 'Main Expenses', amount: 500 },
    { category: 'Products', amount: 300 },
    { category: 'Car', amount: 200 },
    { category: 'Self care', amount: 100 },
    { category: 'Child care', amount: 150 },
    { category: 'Household products', amount: 250 },
    { category: 'Education', amount: 180 },
    { category: 'Leisure', amount: 350 },
    { category: 'Other Expenses', amount: 120 },
  ], []);

  const [selectedMonth, setSelectedMonth] = useState('January');

  const chartData = useMemo(() => ({
    datasets: [{
      data: categoryData.map(category => category.amount),
      backgroundColor: [
        '#FED057', '#FFD8D0', '#FD9498', '#C5BAFF', '#6E78E8',
        '#4A56E2', '#81E1FF', '#24CCA7', '#00AD84',
      ],
    }],
    labels: categoryData.map(category => category.category),
  }), [categoryData]);

  const shouldRenderCurriences = windowWidth >= 768;

  // LOCAL STORAGE
  const [accountBalance, setAccountBalance] = useState(() => {
    const storedBalance = localStorage.getItem(accountBalanceKey);
    return storedBalance ? parseFloat(storedBalance) : 2400;
  });

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem(expensesKey);
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);

    
    const newBalance = calculateNewBalance(); 
    setAccountBalance(newBalance);
    localStorage.setItem(accountBalanceKey, newBalance.toString());
  };

  
  const calculateNewBalance = () => {
    const currentBalance = accountBalance; 
    const expensesTotal = expenses.reduce((total, expense) => total + expense.amount, 0); 
    const newBalance = currentBalance - expensesTotal; 
    return newBalance;
  };

  return (
    <div>
      <Header />
      <div className={css.statistic_container}>
        <div className={css.statistic_container_desktop_left}>
          {shouldRenderCurriences ? (
            <div className={css.tabletViewBox1}>
              <div className={css.tabletViewBox2}>
                <Navigation />
                <Balance />
              </div>
              <div className={css.tabletViewBox3}>
                <Curriences />
              </div>
            </div>
          ) : null}
        </div>

        <div className={css.statistic_container_desktop_right}>
          <div className={css.statistic_containerActual}>
            <div className={css.statistic_container_left}>
              <div className={css.h1_container}>
                <h1>Statistics</h1>
              </div>

              <ChartComponent chartData={{ ...chartData, accountBalance }} />
            </div>

            <div className={css.statistic_container_right}>
              <DropdownMenu
                selected={selectedMonth}
                options={[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ]}
                onOptionSelect={handleMonthSelect}
              />

              <CategoryItem
                labels={chartData.labels}
                datasets={chartData.datasets}
                accountBalance={accountBalance}
                categoryData={categoryData}
              />
              <div className={css.bg}></div>
              <img className={css.elipse1} src={elipse1} alt="elipse orange" />
              <img className={css.elipse2} src={elipse2} alt="elipse purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
