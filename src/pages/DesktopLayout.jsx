import { Outlet } from "react-router-dom";

import styles from "./DesktopLayout.module.css";

const DesktopLayout = () => {
  return (
    <>
      <header className={styles.headerContainer}></header>
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      <footer className={styles.footerContainer}></footer>
    </>
  );
};

export default DesktopLayout;
