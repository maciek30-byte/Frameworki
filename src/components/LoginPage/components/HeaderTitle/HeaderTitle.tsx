import styles from "./HeaderTitle.module.css";

export const HeaderTitle = ({ loginOrSignup }: { loginOrSignup: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>{loginOrSignup}</div>
    </div>
  );
};
