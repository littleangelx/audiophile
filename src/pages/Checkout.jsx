import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";

import cashOnDeliveryImg from "/assets/checkout/icon-cash-on-delivery.svg";
import datajson from "../assets/data.json";
import styles from "./Checkout.module.css";
import CheckoutModal from "../components/CheckoutModal";

const Checkout = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isEMoney, setIsEMoney] = useState(false);

  const cart = useSelector((state) => state.cart.cart);

  let cartItems = [];
  cart.forEach((item) => {
    cartItems.push({
      ...datajson.find((datum) => datum.id === item.id),
      quantity: item.quantity,
    });
  });

  const total = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  const vat = Math.round(0.2 * total);

  const onSubmit = (data) => {
    if (data) setShowModal(true);
  };

  return (
    <>
      <CheckoutModal
        openModal={showModal}
        closeModal={() => setShowModal(false)}
        grandTotal={total + 50}
      />
      <div className={styles.greyPageContainer}>
        <div className={styles.goBack} onClick={() => navigate(-1)}>
          Go Back
        </div>
        <div className={styles.checkoutPageContainer}>
          <div className={styles.checkoutContainer}>
            <h3>Checkout</h3>
            <h5>Billing Details</h5>
            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
              <div
                className={styles.inputRowContainer}
                style={{ marginBottom: "1.5rem" }}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label style={{ color: errors.name ? "#cd2c2c" : "#000" }}>
                      Name
                    </label>
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    style={{
                      borderColor: errors.name ? "#c22c2c" : " #cfcfcf",
                    }}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label style={{ color: errors.email ? "#cd2c2c" : "#000" }}>
                      Email Address
                    </label>
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <input
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Wrong format",
                      },
                    })}
                    style={{
                      borderColor: errors.email ? "#c22c2c" : " #cfcfcf",
                    }}
                  />
                </div>
              </div>
              <div
                className={styles.inputRowContainer}
                style={{ marginBottom: "3rem" }}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label style={{ color: errors.phone ? "#cd2c2c" : "#000" }}>
                      Phone Number
                    </label>
                    {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    style={{
                      borderColor: errors.phone ? "#c22c2c" : " #cfcfcf",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}></div>
              </div>
              <h5>Shipping Info</h5>

              <div
                className={styles.inputRowContainer}
                style={{ marginBottom: "1.5rem" }}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label
                      style={{ color: errors.address ? "#cd2c2c" : "#000" }}
                    >
                      Address
                    </label>
                    {errors.address && <p>{errors.address.message}</p>}
                  </div>
                  <input
                    style={{
                      width: "100%",
                      borderColor: errors.address ? "#c22c2c" : "#cfcfcf",
                    }}
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                </div>
              </div>

              <div
                className={styles.inputRowContainer}
                style={{ marginBottom: "1.5rem" }}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label style={{ color: errors.zip ? "#cd2c2c" : "#000" }}>
                      ZIP Code
                    </label>
                    {errors.zip && <p>{errors.zip.message}</p>}
                  </div>
                  <input
                    {...register("zip", { required: "ZIP code is required" })}
                    style={{
                      borderColor: errors.zip ? "#c22c2c" : "#cfcfcf",
                    }}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label style={{ color: errors.city ? "#cd2c2c" : "#000" }}>
                      City
                    </label>
                    {errors.city && <p>{errors.city.message}</p>}
                  </div>
                  <input
                    {...register("city", { required: "City is required" })}
                    style={{
                      borderColor: errors.city ? "#c22c2c" : "#cfcfcf",
                    }}
                  />
                </div>
              </div>
              <div
                className={styles.inputRowContainer}
                style={{ marginBottom: "3rem" }}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.labelContainer}>
                    <label
                      style={{ color: errors.country ? "#cd2c2c" : "#000" }}
                    >
                      Country
                    </label>
                    {errors.country && <p>{errors.country.message}</p>}
                  </div>
                  <input
                    {...register("country", {
                      required: "Country is required",
                    })}
                    style={{
                      borderColor: errors.country ? "#c22c2c" : "#cfcfcf",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}></div>
              </div>
              <h5 style={{ width: "100%" }}>Payment Details</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <label>Payment Method</label>
                <div
                  style={{
                    width: isMobile ? "100%" : "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginTop: isMobile ? "1rem" : "0",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div className={styles.radioButtonContainer}>
                    <input
                      {...register("paymentMethod")}
                      type="radio"
                      value="emoney"
                      id="field-emoney"
                      onChange={(e) => setIsEMoney(e.target.checked)}
                    />
                    <p>e-Money</p>
                  </div>
                  <div className={styles.radioButtonContainer}>
                    <input
                      {...register("paymentMethod")}
                      type="radio"
                      value="cash"
                      id="field-cash"
                      onChange={(e) => setIsEMoney(!e.target.checked)}
                    />
                    <p>Cash on Delivery</p>
                  </div>
                </div>
              </div>
              {isEMoney ? (
                <div
                  className={styles.inputRowContainer}
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div className={styles.inputContainer}>
                    <label>e-Money Number</label>
                    <input {...register("eNumber", { required: true })} />
                  </div>
                  <div className={styles.inputContainer}>
                    <label>e-Money PIN</label>
                    <input {...register("ePin", { required: true })} />
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", gap: "2rem" }}>
                  <img
                    src={cashOnDeliveryImg}
                    style={{ alignSelf: "center" }}
                  />
                  <p className={styles.cashText}>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </form>
          </div>
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
              <h4 style={{ color: "#d87d4a" }}>
                $ {(total + 50).toLocaleString()}
              </h4>
            </div>
            <button
              className={styles.continueButton}
              width="100%"
              type="submit"
              form="checkout-form"
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
