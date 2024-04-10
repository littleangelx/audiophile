import styles from "./ImageGallery.module.css";

const ImageGallery = ({ product }) => {
  return (
    <div
      className={styles.galleryImages}
      style={{ display: "flex", gap: "1.5rem", width: "100%" }}
    >
      <div
        className={styles.galleryColumnImages}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <img src={product.gallery.first.desktop} />
        <img src={product.gallery.second.desktop} />
      </div>
      <div className={styles.galleryMainImage}>
        <img src={product.gallery.third.desktop} />
      </div>
    </div>
  );
};

export default ImageGallery;
