import React, {useState} from "react";
import css from "./Login.module.css";
import { useDispatch} from "react-redux";
import { isLogin } from "../../Redux/operations";
import {Navigate} from "react-router-dom"

import wallet from "../../icons/wallet.svg";
import email from "../../icons/email.svg";
import password from "../../icons/password.svg";
import frame from '../../icons/frame.svg';
import elipse1 from '../../icons/elipse1.svg';
import elipse2 from '../../icons/elipse2.svg';



function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLogged, setIsLogged] = useState(false); // Dodaj stan isLogged

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await dispatch(isLogin(formData)); // Oczekuj na zalogowanie i uzyskaj wynik

    if (loginSuccess) {
      setIsLogged(true); // Jeśli zalogowano pomyślnie, ustaw isLogged na true
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (isLogged) { console.log("Przekierowanie zachodzi!");
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.box}>
          <img className={css.frame_icon} src={frame} alt="frame icon" />
          <img className={css.elipse1} src={elipse1} alt="elipse orange" />
          <img className={css.elipse2} src={elipse2} alt="elipse purple" />
          <h2 className={css.title}>Finance App</h2>
        </div>
        <div className={css.login_container}>
          <div className={css.login_title}>
            <img className={css.wallet_icon} src={wallet} alt="wallet icon" />
            <h2 className={css.wallet_title}>Wallet</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={css.input_container}>
              <input
                className={css.input}
                type="email"
                placeholder="E-mail"
                name="email"
                required=""
                value={formData.email}
                onChange={handleInputChange}
              />
              <img className={css.input_icon} src={email} alt="email icon" />
            </div>

            <div className={css.input_container}>
              <input
                className={css.input}
                type="password"
                placeholder="Password"
                name="password"
                required=""
                value={formData.password}
                onChange={handleInputChange}
              />
              <img
                className={css.input_icon}
                src={password}
                alt="password icon"
              />
            </div>

            <button className={css.login_button}>LOG IN</button>
          </form>

          <div className={css.register_container}>
            <button className={css.register_button}>REGISTER</button>
            <p className={css.register_button_description}>
              If you don't already have an account, register here!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
