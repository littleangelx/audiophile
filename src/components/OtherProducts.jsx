import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from "./OtherProducts.module.css";
import Button from "./Button";

const OtherProducts = ({ product }) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();

  return (
    <div className={styles.otherProductsContainer}>
      <h3>You may also like</h3>
      <div className={styles.otherProducts}>
        {product.others.map((item) => (
          <div className={styles.otherProduct} key={item.slug}>
            <img
              src={
                isDesktop
                  ? item.image.desktop
                  : isTablet
                  ? item.image.tablet
                  : item.image.mobile
              }
            />
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
