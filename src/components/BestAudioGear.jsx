import { useMediaQuery } from "react-responsive";

import styles from "./BestAudioGear.module.css";
import bestGearImg from "/assets/shared/desktop/image-best-gear.jpg";
import bestGearImgTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearImgMobile from "/assets/shared/mobile/image-best-gear.jpg";

const BestAudioGear = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={styles.audioGear}>
      <div className={styles.audioGearInfo}>
        <h3>
          Bringing you the <span style={{ color: "#d87d4A" }}>best</span> audio
          gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={
          isDesktop
            ? bestGearImg
            : isTablet
            ? bestGearImgTablet
            : bestGearImgMobile
        }
        alt="Man listening to headphones"
      />
    </section>
  );
};

export default BestAudioGear;
