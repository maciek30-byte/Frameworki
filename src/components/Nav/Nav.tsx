import styles from "./Nav.module.css";
import { useState } from "react";
import { ButtonNav } from "./components/ButtonNav/ButtonNav";
import { LoginSignUp } from "../LoginPage/LoginSignUp";
export const Nav = () => {
  const [loginIsVisible, setLoginIsVisible] = useState(false);

  const toggleLogin = () => {
    setLoginIsVisible(!loginIsVisible);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <ButtonNav onClick={toggleLogin} name="Login/SignUp" />
          {loginIsVisible && <LoginSignUp />}
        </div>
      </div>
    </>
  );
};
