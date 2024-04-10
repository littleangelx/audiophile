import { useEffect, useRef } from "react";
import styles from "./Menu.module.css";
import CategoryCards from "./CategoryCards";

const Menu = ({ openMenu, closeMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    if (openMenu) {
      menuRef.current?.showModal();
    } else {
      menuRef.current?.close();
    }
  }, [openMenu]);

  return (
    <dialog ref={menuRef} onCancel={closeMenu} className={styles.menu}>
      <p onClick={closeMenu} style={{ cursor: "pointer" }}>
        x
      </p>
      <CategoryCards isMenu={true} />
    </dialog>
  );
};

export default Menu;
