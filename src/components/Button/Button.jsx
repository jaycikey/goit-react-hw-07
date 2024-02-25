import styles from "./Button.module.css";

const Button = ({ children, id, onClick = () => {}, type }) => {
  return (
    <button type={type} className={styles.button} onClick={() => onClick(id)}>
      {children}
    </button>
  );
};

export default Button;
