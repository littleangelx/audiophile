import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./CheckoutComponent.module.css";
import cashOnDeliveryImg from "/assets/checkout/icon-cash-on-delivery.svg";

const CheckoutComponent = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEMoney, setIsEMoney] = useState(false);

  return (
    <div className={styles.checkoutContainer}>
      <h3>Checkout</h3>
      <h5>Billing Details</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              style={{ borderColor: errors.name ? "#c22c2c" : " #cfcfcf" }}
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
              style={{ borderColor: errors.email ? "#c22c2c" : " #cfcfcf" }}
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
              {...register("phone", { required: "Phone number is required" })}
              style={{ borderColor: errors.phone ? "#c22c2c" : " #cfcfcf" }}
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
              <label style={{ color: errors.address ? "#cd2c2c" : "#000" }}>
                Address
              </label>
              {errors.address && <p>{errors.address.message}</p>}
            </div>
            <input
              style={{
                width: "100%",
                borderColor: errors.address ? "#c22c2c" : "#cfcfcf",
              }}
              {...register("address", { required: "Address is required" })}
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
              <label style={{ color: errors.country ? "#cd2c2c" : "#000" }}>
                Country
              </label>
              {errors.country && <p>{errors.country.message}</p>}
            </div>
            <input
              {...register("country", { required: "Country is required" })}
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
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <label>Payment Method</label>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
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
            <img src={cashOnDeliveryImg} />
            <p className={styles.cashText}>
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutComponent;
