import styles from "./Nav.module.css";
import toggleVisibility from "../LoginPage/LoginSignUp.tsx";

export const Nav = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={toggleVisibility}>
            Login/Sign Up
          </div>
        </div>
      </div>
    </>
  );
};
