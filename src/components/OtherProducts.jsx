import { useNavigate } from "react-router-dom";

import styles from "./OtherProducts.module.css";
import Button from "./Button";

const OtherProducts = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.otherProductsContainer}>
      <h3>You may also like</h3>
      <div className={styles.otherProducts}>
        {product.others.map((item) => (
          <div className={styles.otherProduct} key={item.slug}>
            <img src={item.image.desktop} />
            <h4>{item.name}</h4>
            <Button onClick={() => navigate(`/product-detail/${item.slug}`)}>
              See Product
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
