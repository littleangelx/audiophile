import styles from "./Button.module.css";

const Button = ({ color = "#d87d4a", children }) => {
  return (
    <div className={styles.button} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Button;
