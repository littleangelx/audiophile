import styles from "./Home.module.css";

import Button from "../components/Button";
import ProductGridItem from "../components/ProductGridItem";

import headphonesImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Home = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionInfo}>
          <p className={styles.newProduct}>New Product</p>
          <h2> XX99 Mark II Headphones</h2>
          <p className={styles.newProductInfo}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See Product</Button>
        </div>
      </section>

      <section
        className={styles.gridItemsSection}
        style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
      >
        <ProductGridItem image={headphonesImg} title="Headphones" />
        <ProductGridItem image={speakersImg} title="Speakers" />
        <ProductGridItem image={earphonesImg} title="Earphones" />
      </section>
    </>
  );
};

export default Home;
