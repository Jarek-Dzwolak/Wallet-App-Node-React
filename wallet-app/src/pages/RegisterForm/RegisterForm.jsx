import React, { useState } from 'react'
import css from './RegisterForm.module.css'

import wallet from '../../icons/wallet.svg'
import email from '../../icons/email.svg'
import password from '../../icons/password.svg'
import user from '../../icons/user.svg'

function RegisterForm() {
    const [passwordStrength, setPasswordStrength] = useState('')
    const [passwordLength, setPasswordLength] = useState(0)

    const handlePasswordChange = (event) => {
        const password = event.target.value
        const length = password.length

        setPasswordLength(length)

        if (length === 0) {
            setPasswordStrength('')
        } else if (length <= 6) {
            setPasswordStrength('weak')
        } else if (length <= 12) {
            setPasswordStrength('average')
        } else {
            setPasswordStrength('strong')
        }
    }
    const isRegistrationAllowed =
        passwordStrength === 'average' || passwordStrength === 'strong'

    return (
        <div className={css.register_container}>
            <div className={css.register_title}>
                <img
                    className={css.wallet_icon}
                    src={wallet}
                    alt="wallet icon"
                />
                <h2 className={css.wallet_title}>Wallet</h2>
            </div>
            <form>
                <div className={css.input_container}>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="E-mail"
                        name=""
                        required=""
                    />
                    <img
                        className={css.input_icon}
                        src={email}
                        alt="email icon"
                    />
                </div>

                <div className={css.input_container}>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="Password"
                        name=""
                        required=""
                    />
                    <img
                        className={css.input_icon}
                        src={password}
                        alt="password icon"
                    />
                </div>

                <div className={css.input_container}>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="Confirm password"
                        name=""
                        required=""
                        onChange={handlePasswordChange}
                    />
                    <div className={css.password_strength_bar}>
                        <div
                            className={css.password_strength_indicator}
                            style={{
                                width:
                                    passwordLength === 0
                                        ? '0%'
                                        : passwordLength <= 6
                                        ? '33%'
                                        : passwordLength <= 10
                                        ? '66%'
                                        : '100%',
                            }}
                        ></div>
                    </div>
                    {passwordStrength && (
                        <div className={css.password_strength_text}>
                            {passwordStrength}
                        </div>
                    )}
                    <img
                        className={css.input_icon}
                        src={password}
                        alt="password icon"
                    />
                </div>

                <div className={css.input_container}>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="First name"
                        name=""
                        required=""
                    />
                    <img
                        className={css.input_icon}
                        src={user}
                        alt="user icon"
                    />
                </div>

                <div>
                    {!isRegistrationAllowed && (
                        <p className={css.registration_disabled}>
                            Registration available for only average and strong
                            passwords!
                        </p>
                    )}
                    {isRegistrationAllowed && (
                        <button className={css.register_button}>
                            REGISTER
                        </button>
                    )}
                </div>

                <div className={css.login_container}>
                    <button className={css.login_button}>LOG IN</button>
                    <p className={css.login_button_description}>
                        If you already have an account, login here!
                    </p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
