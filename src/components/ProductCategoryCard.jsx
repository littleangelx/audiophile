import { useNavigate } from "react-router-dom";

import styles from "./ProductCategoryCard.module.css";
import Button from "./Button";

const ProductCategoryCard = ({ imgPos, product }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.rowContainer}
      style={{ flexDirection: imgPos === "left" ? "row" : "row-reverse" }}
    >
      <img src={product.categoryImage.desktop} />
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

export default ProductCategoryCard;
