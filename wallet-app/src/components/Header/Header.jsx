import React from 'react';
import { useSelector } from 'react-redux'; // Importuje useSelector z react-redux
import wallet from '../../icons/wallet.svg';
import exit1 from '../../icons/exit1.svg';
import css from './Header.module.css';

const Header = () => {
  // Użyj useSelector, aby pobrać imię z magazynu Redux
  const firstName = useSelector((state) => state.user.username);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapper_frist}>
        <img className={css.icons_wallet} src={wallet} alt="wallet icon" />
        <span
          className={css.wallet_title}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Wallet
        </span>
      </div>
      <div className={css.wrapper_second}>
        <span className={css.name}>{firstName}Name</span>
        <img className={css.icons_exit1} src={exit1} alt="wallet icon" />
      </div>
    </div>
  );
};

export default Header;
