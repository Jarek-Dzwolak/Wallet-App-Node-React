<<<<<<< HEAD
import React, { useState, useMemo, useEffect } from 'react';
=======
import React, { useState, useEffect, useRef, useMemo } from 'react';
import ChartComponent from '../../components/Chart/Chart';
import css from './Statistic.module.css';
import wallet from '../../icons/wallet.svg';
import homeIcon from '../../icons/home.svg';
import diagramIcon from '../../icons/diagramActiveMobile.svg';
import currencyIcon from '../../icons/currency.svg';
import arrowIcon from '../../icons/arrow.svg';
>>>>>>> bf8b3423ca2d9e88551c26c382e937937a192174

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


const accountBalance = '2150';

function Statistic() {
<<<<<<< HEAD
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

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };
=======
  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  }));

  // Użyj useMemo do zainicjowania categoryData
  const categoryData = useMemo(
    () => [
      { category: 'Main Expenses', amount: 500 },
      { category: 'Products', amount: 300 },
      { category: 'Car', amount: 200 },
      { category: 'Self care', amount: 100 },
      { category: 'Child care', amount: 150 },
      { category: 'Household products', amount: 250 },
      { category: 'Education', amount: 180 },
      { category: 'Leisure', amount: 350 },
      { category: 'Other Expenses', amount: 120 },
    ],
    [],
  );

  const [selectedMonth, setSelectedMonth] = useState('January');
  const [isMonthListOpen, setIsMonthListOpen] = useState(false);
  const months = [
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
  ];

  const [selectedYear, setSelectedYear] = useState('2023'); // domyślny rok
  const [isYearListOpen, setIsYearListOpen] = useState(false);
  const years = ['2021', '2022', '2023']; // dostępne lata

  const chartData = useMemo(
    () => ({
      datasets: [
        {
          data: categoryData.map((category) => category.amount),
          backgroundColor: [
            '#FED057',
            '#FFD8D0',
            '#FD9498',
            '#C5BAFF',
            '#6E78E8',
            '#4A56E2',
            '#81E1FF',
            '#24CCA7',
            '#00AD84',
          ],
        },
      ],
      labels: categoryData.map((category) => category.category),
    }),
    [categoryData],
  );
>>>>>>> bf8b3423ca2d9e88551c26c382e937937a192174

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
<<<<<<< HEAD
        </div>
=======
      </div>

      <ChartComponent
        chartData={{ ...chartData, accountBalance: accountBalance }}
      />

      <div className={css.categoryContainer}>
        <h3>Category</h3>
        <ul>
          {chartData.labels.map((label, index) => (
            <li key={index}>
              <span
                className={css.categoryColor}
                style={{
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                }}
              ></span>
              {label}: {chartData.datasets[0].data[index]}
            </li>
          ))}
          <li>
            <span
              className={css.categoryColor}
              style={{ backgroundColor: '#000' }}
            ></span>
            Expenses:{' '}
            {categoryData.reduce(
              (total, category) => total + category.amount,
              0,
            )}
          </li>
          <li>
            <span
              className={css.categoryColor}
              style={{ backgroundColor: '#000' }}
            ></span>
            Income: {/* kwota przychodów */}
          </li>
        </ul>
      </div>
>>>>>>> bf8b3423ca2d9e88551c26c382e937937a192174
    </div>
  );
}

export default Statistic;
