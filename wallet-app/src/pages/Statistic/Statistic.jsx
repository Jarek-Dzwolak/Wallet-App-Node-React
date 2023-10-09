import React, { useState, useEffect, useRef, useMemo } from "react";
import  ChartComponent  from "../../components/Chart/Chart"; 
import css from "./Statistic.module.css";
import wallet from "../../icons/wallet.svg";
import homeIcon from "../../icons/home.svg";
import diagramIcon from "../../icons/diagram.svg";
import currencyIcon from "../../icons/currency.svg";
import arrowIcon from "../../icons/arrow.svg";

const accountBalance = 1000;

function Statistic() {
 
  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    }),
    
  );

  // Użyj useMemo do zainicjowania categoryData
  const categoryData = useMemo(
    () => [
      { category: "Main Expenses", amount: 500 },
      { category: "Products", amount: 300 },
      { category: "Car", amount: 200 },
      { category: "Self care", amount: 100 },
      { category: "Child care", amount: 150 },
      { category: "Household products", amount: 250 },
      { category: "Education", amount: 180 },
      { category: "Leisure", amount: 350 },
      { category: "Other Expenses", amount: 120 },
    ],
    []
  );

  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isMonthListOpen, setIsMonthListOpen] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedYear, setSelectedYear] = useState("2023"); // domyślny rok
  const [isYearListOpen, setIsYearListOpen] = useState(false);
  const years = ["2021", "2022", "2023"]; // dostępne lata

  const chartData = useMemo(
    () => ({
      datasets: [
        {
          data: categoryData.map((category) => category.amount),
          backgroundColor: [
            "#FED057",
            "#FFD8D0",
            "#FD9498",
            "#C5BAFF",
            "#6E78E8",
            "#4A56E2",
            "#81E1FF",
            "#24CCA7",
            "#00AD84",
          ],
        },
      ],
      labels: categoryData.map((category) => category.category),
    }),
    [categoryData]
  );

  return (
    <div className={css.statistic_container}>
      <div className={css.wallet_header}>
        <img className={css.wallet_icon} src={wallet} alt="wallet icon" />
        <h2 className={css.wallet_title}>Wallet</h2>
      </div>

      <div>
        <h1>Statistic</h1>
      </div>

      <div className={css.wallet_header}>
        <img className={css.wallet_icon} src={homeIcon} alt="home icon" />
        <img className={css.wallet_icon} src={diagramIcon} alt="diagram icon" />
        <img
          className={css.wallet_icon}
          src={currencyIcon}
          alt="currency icon"
        />
      </div>

      <div className={css.statisticContent}>
        <div className={css.select}>
          <div
            onClick={() => {
              setIsMonthListOpen(!isMonthListOpen);
            }}
            className={css.timeBox}
          >
            <input
              className={css.selectMonthInput}
              value={selectedMonth}
              readOnly
            />
            <div className={css.arrowIcon}>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
            {isMonthListOpen && (
              <ul className={css.optionList}>
                {months.map((month) => (
                  <li
                    key={month}
                    onClick={() => {
                      setSelectedMonth(month);
                      setIsMonthListOpen(false);
                    }}
                    className={
                      selectedMonth === month
                        ? css.selectedOptionLi
                        : css.optionLi
                    }
                  >
                    {month}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={css.select}>
          <div
            onClick={() => {
              setIsYearListOpen(!isYearListOpen);
            }}
            className={css.timeBox}
          >
            <input
              className={css.selectYearInput}
              value={selectedYear}
              readOnly
            />
            <div className={css.arrowIcon}>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
            {isYearListOpen && (
              <ul className={css.optionList}>
                {years.map((year) => (
                  <li
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsYearListOpen(false);
                    }}
                    className={
                      selectedYear === year
                        ? css.selectedOptionLi
                        : css.optionLi
                    }
                  >
                    {year}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <ChartComponent chartData={{ ...chartData, accountBalance: accountBalance }} />

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
              style={{ backgroundColor: "#000" }}
            ></span>
            Expenses:{" "}
            {categoryData.reduce(
              (total, category) => total + category.amount,
              0
            )}
          </li>
          <li>
            <span
              className={css.categoryColor}
              style={{ backgroundColor: "#000" }}
            ></span>
            Income: {/* kwota przychodów */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Statistic;
