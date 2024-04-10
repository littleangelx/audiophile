import { useMediaQuery } from "react-responsive";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ product }) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      className={styles.galleryImages}
      style={{ width: isDesktop ? "1220px" : isTablet ? "750px" : "360px" }}
    >
      <div className={styles.galleryColumnImages}>
        <img
          src={
            isDesktop
              ? product.gallery.first.desktop
              : isTablet
              ? product.gallery.first.tablet
              : product.gallery.first.mobile
          }
        />
        <img
          src={
            isDesktop
              ? product.gallery.second.desktop
              : isTablet
              ? product.gallery.second.tablet
              : product.gallery.second.mobile
          }
        />
      </div>
      <div className={styles.galleryMainImage}>
        <img
          src={
            isDesktop
              ? product.gallery.third.desktop
              : isTablet
              ? product.gallery.third.tablet
              : product.gallery.third.mobile
          }
        />
      </div>
    </div>
  );
};

export default ImageGallery;
