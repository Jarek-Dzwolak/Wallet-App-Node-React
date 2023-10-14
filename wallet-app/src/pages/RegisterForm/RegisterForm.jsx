import React, { useState } from 'react';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/operations';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import zxcvbn from 'zxcvbn';

import wallet from '../../icons/wallet.svg';
import email from '../../icons/email.svg';
import password from '../../icons/password.svg';
import user from '../../icons/user.svg';
import elipseregisterform from '../../icons/elipseregisterform.svg';
import elipse1registerform from '../../icons/elipse1registerform.svg';
import registerformframe1 from '../../icons/registerformframe1.svg';

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState('input');
  const [score, setScore] = useState(null);

  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  const testStrengthPassword = (e) => {
    if (e.target.value !== '') {
      let pass = zxcvbn(e.target.value);
      // console.log(pass);
      setScore(pass.score);
    } else {
      setScore(null);
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[@#$%^&+=!]/;

    if (
      uppercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    if (!validateEmail(email)) {
      Notiflix.Notify.failure('Invalid email format!');
      return;
    }

    if (!validatePassword(password)) {
      Notiflix.Notify.failure(
        'Password must have at least one uppercase letter, one digit, and one special character.',
      );
      return;
    }

    if (password !== confirmPassword) {
      Notiflix.Notify.failure('Passwords do not match');
      return;
    }
    try {
      const response = await dispatch(
        register({
          email,
          password,
          firstName: form.elements.firstName.value,
        }),
      );
      if (response) {
        localStorage.setItem('accessToken', response.token);
        form.reset();
        navigate('/home');
        Notiflix.Notify.success('Registration successful');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure(
          'Email already exists. Please use a different email.',
        );
      } else {
        console.error(error);

        Notiflix.Notify.failure('Registration failed. Please try again.');
      }
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
    Notiflix.Notify.info('You deliberately went to the login page.');
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.box}>
          <img
            className={css.registerformframe1}
            src={registerformframe1}
            alt="frame icon"
          ></img>
          <h2 className={css.title}>Finance App</h2>
        </div>
        <img
          className={css.elipseregisterform}
          src={elipseregisterform}
          alt="elipse"
        ></img>
        <img
          className={css.elipse1registerform}
          src={elipse1registerform}
          alt="elipse"
        ></img>
        <div className={css.register_container}>
          <div className={css.register_title}>
            <img className={css.wallet_icon} src={wallet} alt="wallet icon" />
            <h2 className={css.wallet_title}>Wallet</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={css.input_container}>
              <input
                className={css.input}
                type="text"
                placeholder="E-mail"
                name="email"
                required=""
              />
              <img className={css.input_icon} src={email} alt="email icon" />
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            <div className={css.input_container}>
              <img
                className={css.input_icon}
                src={password}
                alt="password icon"
              />
              <input
                className={css.input}
                type={type}
                placeholder="Password"
                name="password"
                required=""
                onChange={testStrengthPassword}
              />
            </div>

            <div className={css.input_container}>
              <img
                className={css.input_icon}
                src={password}
                alt="password icon"
              />
              <input
                className={css.input}
                type={type}
                placeholder="Confirm password"
                name="confirmPassword"
                required=""
                onChange={testStrengthPassword}
              />
              <span className={css.show_password} onClick={showHide}>
                {type === 'input' ? 'Hide' : 'Show'}
              </span>
              <span className={css.strength_password} data-score={score}></span>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className={css.input_container}>
              <input
                className={css.input}
                type="text"
                placeholder="First name"
                name="firstName"
                required=""
              />
              <img className={css.input_icon} src={user} alt="user icon" />
            </div>
            <div>
              <button className={css.register_button}>REGISTER</button>
            </div>

            <div className={css.login_container}>
              <button className={css.login_button} onClick={handleLoginClick}>
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
