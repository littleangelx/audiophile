import { useMediaQuery } from "react-responsive";

import styles from "./CategoryCards.module.css";
import ProductGridItem from "./ProductGridItem";

import headphonesImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

const CategoryCards = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      className={styles.gridItemsSection}
      style={{
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "1.5rem",
      }}
    >
      <ProductGridItem image={headphonesImg} title="headphones" />
      <ProductGridItem image={speakersImg} title="speakers" />
      <ProductGridItem image={earphonesImg} title="earphones" />
    </section>
  );
};

export default CategoryCards;
