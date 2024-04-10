import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./CheckoutModal.module.css";
import data from "../assets/data.json";
import comfirmationIcon from "/assets/checkout/icon-order-confirmation.svg";
import Button from "./Button";
import { cartActions } from "../store/cartSlice";

const CheckoutModal = ({ openModal, closeModal, grandTotal }) => {
  const checkoutRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  let cartItems = [];
  cart.forEach((item) => {
    cartItems.push({
      ...data.find((datum) => datum.id === item.id),
      quantity: item.quantity,
    });
  });

  useEffect(() => {
    if (openModal) {
      checkoutRef.current?.showModal();
    } else {
      checkoutRef.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={checkoutRef}
      onCancel={closeModal}
      className={styles.checkoutModal}
    >
      <img src={comfirmationIcon} />
      <h2>
        Thank you <br /> for your order
      </h2>
      <p>You will receive an email confirmation shortly.</p>
      <div className={styles.orderDetails}>
        <div className={styles.orderItems}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                src={cartItems[0].checkoutImg}
                style={{ width: "3rem", height: "3rem" }}
              />
              <div>
                <h5
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    color: "#000",
                  }}
                >
                  {cartItems[0].cartName}
                </h5>
                <p>$ {cartItems[0].price.toLocaleString()}</p>
              </div>
            </div>
            <p>x{cartItems[0].quantity}</p>
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              color: "#000",
              opacity: "0.5",
            }}
          />
          <div className={styles.otherItems}>
            <p>
              and {cartItems.length - 1} other{" "}
              {cartItems.length === 2 ? "item" : "items"}
            </p>
          </div>
        </div>
        <div className={styles.orderTotal}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Grand Total</h3>
            <h2>$ {grandTotal.toLocaleString()}</h2>
          </div>
        </div>
      </div>
      <Button
        width="100%"
        onClick={() => {
          navigate("/");
          dispatch(cartActions.emptyCart());
        }}
      >
        Back to home
      </Button>
    </dialog>
  );
};

export default CheckoutModal;
