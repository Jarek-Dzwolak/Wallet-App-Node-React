import React from 'react';
import { fields } from '../IncomeExpenseField/IncomeExpenseField';
import styles from './IncomeExpense.module.css';
import editBtn from '../../icons/editBtn.svg';

const IncomeExpenseTable = ({ transactions }) => {
  const isWideScreen = window.innerWidth > 768;
  return isWideScreen ? (
    <div>
      {isWideScreen && (
        <ul className={styles.listKeys}>
          <li className={styles.desktopItem}>
            <strong>Date</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Type</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Category</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Comment</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Sum</strong>
          </li>
          <li className={styles.desktopItem}></li>
        </ul>
      )}
      {transactions.map((item, index) => (
        <ul key={index} className={styles.listValues}>
          <li>
            <span>{item.Date}</span>
          </li>
          <li>
            <span>{item.Type}</span>
          </li>
          <li>
            <span>{item.Category}</span>
          </li>
          <li>
            <span>{item.Comment}</span>
          </li>
          <li>
            <span style={{ color: item.Type === '-' ? 'red' : 'green' }}>
              {item.Sum}
            </span>
          </li>
          <li className={styles.buttonBox}>
            <button className={styles.editBtn}>
              <img src={editBtn} alt="edit button" />
            </button>
            <button className={styles.deleteBtn}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  ) : (
    <div className={styles.table}>
      {transactions.map((item) => (
        <ul className={styles.list}>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Date:</strong> <span>{item.Date}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Type:</strong> <span>{item.Type}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Category:</strong> <span>{item.Category}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Comment:</strong> <span>{item.Comment}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Sum:</strong>{' '}
            <span style={{ color: item.Type === '-' ? 'red' : 'green' }}>
              {item.Sum}
            </span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <button className={styles.deleteBtn}>Delete</button>
            <button className={styles.editBtn}>
              <img src={editBtn} alt="edit button" />
              <span>Edit</span>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

// const IncomeExpenseTable = () => {

//   return (
//     <div className={styles.table}>
//       {fields.map((item, index) => (
//         <React.Fragment key={index}>
//           {/* Renderowanie nagłówka tylko dla szerokich ekranów */}
//           {isWideScreen && (
//             <ul className={styles.list}>
//               <li className={styles.item}>
//                 <strong>Date:</strong>
//               </li>
//               <li className={styles.item}>
//                 <strong>Type:</strong>
//               </li>
//               <li className={styles.item}>
//                 <strong>Category:</strong>
//               </li>
//               <li className={styles.item}>
//                 <strong>Comment:</strong>
//               </li>
//               <li className={styles.item}>
//                 <strong>Sum:</strong>
//               </li>
//               <li className={styles.item}>
//                 <strong>Action:</strong>
//               </li>
//             </ul>
//           )}

//           {/* Renderowanie danych */}
//           <ul className={styles.list}>
//             <li className={styles.item}>
//               <span>{item.Date}</span>
//             </li>
//             <li className={styles.item}>
//               <span>{item.Type}</span>
//             </li>
//             <li className={styles.item}>
//               <span>{item.Category}</span>
//             </li>
//             <li className={styles.item}>
//               <span>{item.Comment}</span>
//             </li>
//             <li className={styles.item}>
//               <span>{item.Sum}</span>
//             </li>
//             <li className={styles.item}>
//               <button className={styles.deleteBtn}>Delete</button>
//               <button className={styles.editBtn}>
//                 <img src={editBtn} alt="edit button" />
//                 <span>Edit</span>
//               </button>
//             </li>
//           </ul>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

export default IncomeExpenseTable;
