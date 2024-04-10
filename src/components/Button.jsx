import styles from "./Button.module.css";

const Button = ({
  color = "#d87d4a",
  width = "10rem",
  align = "left",
  children,
  ...props
}) => {
  return (
    <div
      className={styles.button}
      style={{ backgroundColor: color, width: width, alignSelf: align }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
