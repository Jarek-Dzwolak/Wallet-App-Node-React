import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import css from "./Statistic.module.css";

function Statistic() {
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
    "December"
  ];

  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

 const categories = [
  { name: "Main expenses", color: "#FED057" },
  { name: "Products", color: "#FFD8D0" },
  { name: "Car", color: "#FD9498" },
  { name: "Self care", color: "#C5BAFF" },
  { name: "Child care", color: "#6E78E8" },
  { name: "Household products", color: "#4A56E2" },
  { name: "Education", color: "#81E1FF" },
  { name: "Leisure", color: "#24CCA7" },
  { name: "Other expenses", color: "#00AD84" },
];

  return (
    <div>
      <Navigation />
		  <div className={css.stats_container}>
			  <div>
		<h1>Statistics</h1>
			  {/* Kółeczko statystyk */}
        <span className={css.stats_wheel}></span>
        <span>
          <select className={css.dropDown_menu}>
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select className={css.dropDown_menu}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
				</span>
				  </div>
		 
		  {/* Lista wydatków */}
       <div className={css.expanse_list}>
        <strong>Category</strong>
          <strong>Sum</strong>
          
        <ul>
          {categories.map((category, index) => (
      <li key={index} className={css.expanse_list_element}>
    <span
      className={css.category_color}
      style={{
        backgroundColor: category.color,
        width: '24px',
        height: '24px',
        borderRadius: '2px',
        display: 'inline-block',
        marginRight: '10px'
      }}
    ></span>
    {category.name}
      </li>
    ))}
        </ul>
			  </div>
      
      <div className={css.stats_sum}>
        <span className={css.stats_transactions}><strong>Expenses:</strong><p>Value</p></span>
          <span className={css.stats_transactions}><strong>Income:</strong><p>Value</p></span>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
