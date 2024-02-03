import styles from "./InputField.module.css";
interface Props {
  icon: string;
  placeholder: string;
}

export const InputField = (props: Props) => {
  return (
    <div className={styles.input}>
      <img className={styles.icon} src={props.icon} alt="" />
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
