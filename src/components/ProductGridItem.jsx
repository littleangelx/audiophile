import { useNavigate } from "react-router-dom";

import styles from "./ProductGridItem.module.css";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

const ProductGridItem = ({ image, title }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.background}>
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
