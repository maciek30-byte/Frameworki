import styles from "./ButtonNav.module.css";

interface Props {
  onClick: () => void;
  name: string;
}

export const ButtonNav = (props: Props) => {
  return (
    <div className={styles.button} onClick={props.onClick}>
      {props.name}
    </div>
  );
};
