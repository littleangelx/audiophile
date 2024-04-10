import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import styles from "./ProductCategoryCardTablet.module.css";

const ProductCategoryCardTablet = ({ product }) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.columnContainer}>
      <img
        src={
          isMobile ? product.categoryImage.mobile : product.categoryImage.tablet
        }
      />
      <div className={styles.categoryProductInfo}>
        {product.new && <p className={styles.newProduct}>New Product</p>}
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <Button onClick={() => navigate(`/product-detail/${product.slug}`)}>
          See Product
        </Button>
      </div>
    </div>
  );
};

export default ProductCategoryCardTablet;
