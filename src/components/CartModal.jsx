import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import data from "../assets/data.json";
import styles from "./CartModal.module.css";
import { cartActions } from "../store/cartSlice";
import Button from "./Button";

const CartModal = ({ openModal, closeModal }) => {
  const ref = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className={styles.modal}>
      <div className={styles.cartHeader}>
        <h3>Cart ({cartItems.length})</h3>
        {cartItems.length > 0 && (
          <p
            onClick={() => {
              dispatch(cartActions.emptyCart());
              closeModal();
            }}
          >
            Remove all
          </p>
        )}
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
            <div className={styles.quantityContainer}>
              <p
                className={styles.plusMinus}
                onClick={() => dispatch(cartActions.decrementQuantity(item.id))}
              >
                -
              </p>
              <p className={styles.quantity}>{item.quantity}</p>
              <p
                className={styles.plusMinus}
                onClick={() => dispatch(cartActions.incrementQuantity(item.id))}
              >
                +
              </p>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length ? (
        <>
          <div className={styles.totalContainer}>
            <p>Total</p>
            <h4>$ {total.toLocaleString()}</h4>
          </div>
          <Button
            width="100%"
            onClick={() => {
              navigate("/checkout");
              closeModal();
            }}
          >
            Checkout
          </Button>
        </>
      ) : (
        <p>Cart is empty 😞</p>
      )}
    </dialog>
  );
};

export default CartModal;
