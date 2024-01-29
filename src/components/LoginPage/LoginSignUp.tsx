import { useState } from "react";
import styles from "./LoginSignUp.module.css";

import user_icon from "../Assets/user.jpg.png";
import email_icon from "../Assets/mail.png";
import password_icon from "../Assets/password.png";
export const toggleVisibility = () => {
  setIsVisible(!isVisible);
};

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img className={styles.icon} src={user_icon} alt="" />
          <input type="text" placeholder="Login" />
        </div>
        {action === "Login" ? (
          ""
        ) : (
          <div className={styles.input}>
            <img className={styles.icon} src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
        )}
        <div className={styles.input}>
          <img className={styles.icon} src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        ""
      ) : (
        <div className={styles.forgotPassword}>
          Lost password? <span>Click Here!</span>
        </div>
      )}
      <div className={styles.submitContainer}>
        <div
          className={
            action === "Login"
              ? `${styles.submit} ${styles.grey}`
              : styles.submit
          }
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={
            action === "Sign Up"
              ? `${styles.submit} ${styles.grey}`
              : styles.submit
          }
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
