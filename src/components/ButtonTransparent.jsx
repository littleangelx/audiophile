import styles from "./ButtonTransparent.module.css";

const ButtonTransparent = ({ children }) => {
  return <div className={styles.buttonTransparent}>{children}</div>;
};

export default ButtonTransparent;
