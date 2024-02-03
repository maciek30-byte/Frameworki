import logo from "../../../Assets/logo.png";
import styles from "./Logo.module.css";
export const Logo = () => {
  return <img src={logo} className={styles.logo}></img>;
};
