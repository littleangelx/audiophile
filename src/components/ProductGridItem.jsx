import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from "./ProductGridItem.module.css";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

const ProductGridItem = ({ isMenu, image, title }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();

  return (
    <div
      className={styles.background}
      style={{ height: isMobile && isMenu ? "10rem" : "13rem" }}
    >
      <div className={styles.productGridItem}>
        <img src={image} alt="Product image" />
        <p>{title}</p>
        <div
          className={styles.shop}
          onClick={() => navigate(`/category/${title}`)}
        >
          <p>Shop</p>
          <img src={arrowRight} alt="Right arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
