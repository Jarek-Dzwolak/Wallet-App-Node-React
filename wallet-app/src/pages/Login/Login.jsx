import React, {useState} from "react";
import css from "./Login.module.css";
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/operations";

import wallet from "../../icons/wallet.svg";
import email from "../../icons/email.svg";
import password from "../../icons/password.svg";


function Login() {
 const dispatch = useDispatch()
  const [ formData, setFormData ] = useState({
    email:"",
    password:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(isLogin(formData));
  }

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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
          <img className={css.input_icon} src={password} alt="password icon" />
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
  );
}

export default Login;
