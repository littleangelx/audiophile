import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./MobileLayout.module.css";
import hamburgerImg from "/assets/shared/tablet/icon-hamburger.svg";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import CartModal from "../components/CartModal";

const MobileLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const page = window.location.pathname;
  return (
    <div style={{ backgroundColor: page === "/checkout" ? "#f1f1f1" : "#fff" }}>
      <CartModal openModal={showModal} closeModal={() => setShowModal(false)} />

      <header className={styles.headerContainer}>
        <img src={hamburgerImg} alt="Menu Icon" style={{ cursor: "pointer" }} />
        <img src={logo} alt="Audiophile logo" />
        <img
          style={{ cursor: "pointer" }}
          src={cartIcon}
          alt="Cart icon"
          onClick={() => setShowModal(true)}
        />
      </header>
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      <footer className={styles.footerContainer}>
        <div className={styles.info}>
          <img src={logo} alt="Audiophile logo" />
          <nav className={styles.nav}>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/category/headphones")}>Headphones</p>
            <p onClick={() => navigate("/category/speakers")}>Speakers</p>
            <p onClick={() => navigate("/category/earphones")}>Earphones</p>
          </nav>
          <p style={{ marginBottom: "2.5rem" }}>
            {" "}
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            {" "}
            Copyright 2021. All Rights Reserved
          </p>
          <div className={styles.smIcons}>
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={twitterIcon} alt="Twitter icon" />
            <img src={instagramIcon} alt="Instagram icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileLayout;
