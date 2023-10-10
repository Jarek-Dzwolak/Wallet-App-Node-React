import React, { useState, useMemo, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ChartComponent from '../../components/Chart/Chart';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import CategoryItem from '../../components/Category/CategoryItem';
import Balance from '../../components/Balance/Balance';
import Curriences from '../../components/Curriences/Curriences';
import css from './Statistic.module.css';

const accountBalance = '2150';

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

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div>
      <Header />
      <div className={css.statistic_container}>
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

        <div className={css.statistic_containerActual}>
          <div>
            <h1>Statistics</h1>
          </div>

          <ChartComponent chartData={{ ...chartData, accountBalance }} />

          <DropdownMenu
            selected={selectedMonth}
            options={[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December',
            ]}
            onOptionSelect={handleMonthSelect}
          />

          <CategoryItem
            labels={chartData.labels}
            datasets={chartData.datasets}
            accountBalance={accountBalance}
            categoryData={categoryData}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
