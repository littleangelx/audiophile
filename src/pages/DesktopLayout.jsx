import { Outlet } from "react-router-dom";

import styles from "./DesktopLayout.module.css";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";

const DesktopLayout = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <img src={logo} alt="Audiophile logo" />
        <nav className={styles.nav}>
          <p>Home</p>
          <p>Headphones</p>
          <p>Speakers</p>
          <p>Earphones</p>
        </nav>
        <img src={cartIcon} alt="Cart icon" />
      </header>
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      <footer className={styles.footerContainer}>
        <div className={styles.info}>
          <img src={logo} alt="Audiophile logo" />
          <p style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            {" "}
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p> Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={styles.footerRhs}>
          <nav className={styles.nav}>
            <p>Home</p>
            <p>Headphones</p>
            <p>Speakers</p>
            <p>Earphones</p>
          </nav>
          <div className={styles.smIcons}>
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={twitterIcon} alt="Twitter icon" />
            <img src={instagramIcon} alt="Instagram icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default DesktopLayout;
