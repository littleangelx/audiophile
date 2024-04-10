import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import data from "../assets/data.json";
import styles from "./ProductDetailLayout.module.css";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import OtherProducts from "../components/OtherProducts";
import { cartActions } from "../store/cartSlice";

const ProductDetailLayout = () => {
  const { slug } = useParams();

  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const product = data.find((item) => item.slug === slug);

  const storedQuantity = useSelector((state) => state.cart.cart).filter(
    (item) => item.id === product.id
  )[0]?.quantity;
  const [quantity, setQuantity] = useState(storedQuantity || 1);

  const handleAddToCart = () => {
    dispatch(cartActions.addProduct({ id: product.id, quantity }));
  };

  return (
    <>
      <div className={styles.productDetailContainer}>
        <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          Go Back
        </div>
        <div className={styles.rowContainer}>
          <img src={product.categoryImage.desktop} />
          <div className={styles.categoryProductInfo}>
            {product.new && <p className={styles.newProduct}>New Product</p>}
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.price}>${product.price.toLocaleString()}</p>
            <div className={styles.cartContainer}>
              <div className={styles.quantityContainer}>
                <p
                  className={styles.plusMinus}
                  onClick={() =>
                    setQuantity((prev) => {
                      if (prev >= 1) {
                        return prev - 1;
                      } else {
                        return prev;
                      }
                    })
                  }
                >
                  -
                </p>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={styles.quantity}
                />

                <p
                  className={styles.plusMinus}
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </p>
              </div>
              <Button onClick={handleAddToCart}>
                {storedQuantity ? "Update cart" : "Add to cart"}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.moreProductInfo}>
          <div className={styles.features}>
            <h3>Features</h3>
            <p>{product.features}</p>
          </div>
          <div className={styles.inTheBox}>
            <h3>In the box</h3>
            <div className={styles.whatsInTheBox}>
              {product.includes.map((item, index) => {
                return (
                  <p key={index}>
                    <span className={styles.quantityInTheBox}>
                      {item.quantity}x
                    </span>
                    {item.item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <ImageGallery product={product} />
        <OtherProducts product={product} />
        <CategoryCards />
        <BestAudioGear />
      </div>
    </>
  );
};

export default ProductDetailLayout;
