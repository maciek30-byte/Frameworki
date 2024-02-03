import styles from "./Header.module.css";

import { Logo } from "./components/Logo/Logo";

export const Header = () => {
  return (
    <div className={styles.headerTop}>
      <Logo />
    </div>
  );
};
