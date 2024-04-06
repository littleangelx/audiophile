import styles from "./ProductGridItem.module.css";

import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

const ProductGridItem = ({ image, title }) => {
  return (
    <div className={styles.background}>
      <div className={styles.productGridItem}>
        <img src={image} alt="Product image" />
        <p>{title}</p>
        <div className={styles.shop}>
          <p>Shop</p>
          <img src={arrowRight} alt="Right arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
