import { useMediaQuery } from "react-responsive";

import styles from "./CategoryCards.module.css";
import ProductGridItem from "./ProductGridItem";

import headphonesImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

const CategoryCards = ({ isMenu = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      className={styles.gridItemsSection}
      style={{
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "1.5rem",
        marginTop: isMenu ? "0" : "7rem",
        marginBlock: isMenu ? "0" : "7rem",
        overflow: "hidden",
        width: isMenu ? "100%" : "100%",
        marginRight: 0,
        placeItems: "center",
      }}
    >
      <ProductGridItem
        isMenu={isMenu}
        image={headphonesImg}
        title="headphones"
      />
      <ProductGridItem isMenu={isMenu} image={speakersImg} title="speakers" />
      <ProductGridItem isMenu={isMenu} image={earphonesImg} title="earphones" />
    </section>
  );
};

export default CategoryCards;
