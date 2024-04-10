import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import styles from "./CartSummary.module.css";
import data from "../assets/data.json";

const CartSummary = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  //   const productIds = cart.map((product) => product.id);
  //   console.log(productIds);

  let cartItems = [];
  cart.forEach((item) => {
    cartItems.push({
      ...data.find((datum) => datum.id === item.id),
      quantity: item.quantity,
    });
  });

  const total = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  const vat = Math.round(0.2 * total);

  const handleContinue = () => {
    onSubmit();
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h3>Summary </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <img src={item.image.desktop} style={{ width: "4rem" }} />
                <div
                  style={{
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <h4>{item.cartName}</h4>
                  <p>$ {item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <p>x{item.quantity}</p>
          </div>
        ))}
      </div>
      <div className={styles.totalContainer}>
        <p>Total</p>
        <h4>$ {total.toLocaleString()}</h4>
      </div>
      <div className={styles.totalContainer}>
        <p>Shipping</p>
        <h4>$ 50</h4>
      </div>
      <div className={styles.totalContainer}>
        <p>VAT (Included)</p>
        <h4>$ {vat.toLocaleString()}</h4>
      </div>
      <div
        className={styles.totalContainer}
        style={{ marginTop: "1.2rem", marginBottom: "1.2rem" }}
      >
        <p>Grand Total</p>
        <h4 style={{ color: "#d87d4a" }}>$ {(total + 50).toLocaleString()}</h4>
      </div>
      <Button width="100%" onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default CartSummary;
