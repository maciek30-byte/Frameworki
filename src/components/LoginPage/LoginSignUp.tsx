import { useState } from "react";
import { HeaderTitle } from "./components/HeaderTitle/HeaderTitle";
import { InputField } from "./components/InputField/InputField";
import styles from "./LoginSignUp.module.css";

import user_icon from "../Assets/user.png";
import email_icon from "../Assets/mail.png";
import password_icon from "../Assets/password.png";

export const LoginSignUp = () => {
  const [loginOrSignup, setLoginOrSignup] = useState<string>("Login");
  return (
    <div className={styles.container}>
      <HeaderTitle loginOrSignup={loginOrSignup} />
      <div className={styles.underline} />
      <div className={styles.inputs}>
        <InputField icon={user_icon} placeholder="Login" />
        {loginOrSignup === "Login" ? (
          ""
        ) : (
          <InputField icon={email_icon} placeholder="Email" />
        )}
        <InputField icon={password_icon} placeholder="Password" />
      </div>
      {loginOrSignup === "Sign Up" ? (
        ""
      ) : (
        <div className={styles.forgotPassword}>
          Lost password? <span>Click Here!</span>
        </div>
      )}
      <div className={styles.submitContainer}>
        <div
          className={
            loginOrSignup === "Login"
              ? `${styles.submit} ${styles.grey}`
              : styles.submit
          }
          onClick={() => setLoginOrSignup("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={
            loginOrSignup === "Sign Up"
              ? `${styles.submit} ${styles.grey}`
              : styles.submit
          }
          onClick={() => {
            setLoginOrSignup("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
