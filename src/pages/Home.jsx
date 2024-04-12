import { useMediaQuery } from "react-responsive";

import styles from "./Home.module.css";

import Button from "../components/Button";
import ButtonTransparent from "../components/ButtonTransparent";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import zx9SpeakerImg from "/assets/home/desktop/image-speaker-zx9.png";
import zx7SpeakerImgTablet from "/assets/home/tablet/image-speaker-zx9.png";
import zx7SpeakerImgMobile from "/assets/home/mobile/image-speaker-zx9.png";
import yx1EarphonesImg from "/assets/home/desktop/image-earphones-yx1.jpg";
import yx1EarphonesImgTablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import yx1EarphonesImgMobile from "/assets/home/mobile/image-earphones-yx1.jpg";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <section
        className={styles.heroSection}
        style={{
          height: isDesktop ? "55rem" : isTablet ? "45rem" : "35rem",
          backgroundImage: isDesktop
            ? 'url("/assets/home/desktop/image-hero.jpg")'
            : isTablet
            ? 'url("/assets/home/tablet/image-header.jpg")'
            : 'url("/assets/home/mobile/image-header.jpg")',
          width: "100dvw",
          left: isDesktop ? "-10rem" : isTablet ? "-2rem" : "-1.5rem",
          paddingLeft: isDesktop ? "10rem" : "0",
          alignItems: "center",
          justifyContent: isDesktop ? "flex-start" : "center",
          textAlign: isDesktop ? "left" : "center",
        }}
      >
        <div className={styles.heroSectionInfo}>
          <p className={styles.newProduct}>New Product</p>
          <h2> XX99 Mark II Headphones</h2>
          <p className={styles.newProductInfo}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button align={isDesktop ? "left" : "center"}>See Product</Button>
        </div>
      </section>

      <CategoryCards />

      <section className={styles.zx9Speaker}>
        <img
          src={
            isDesktop
              ? zx9SpeakerImg
              : isTablet
              ? zx7SpeakerImgTablet
              : zx7SpeakerImgMobile
          }
          alt="Image of ZX9 speaker"
        />
        <div className={styles.zx9SpeakerInfo}>
          <h2>ZX9 Speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button color="#000" align={isDesktop ? "left" : "center"}>
            See Product
          </Button>
        </div>
      </section>

      <section className={styles.zx7Speaker}>
        <div className={styles.zx7SpeakerInfo}>
          <h3>ZX7 Speaker</h3>
          <ButtonTransparent>See Product</ButtonTransparent>
        </div>
      </section>

      <section className={styles.yx1Earphones}>
        <img
          src={
            isDesktop
              ? yx1EarphonesImg
              : isTablet
              ? yx1EarphonesImgTablet
              : yx1EarphonesImgMobile
          }
          alt="Image of Earphones"
        />
        <div className={styles.yx1EarphonesInfo}>
          <h3>YX1 Earphones</h3>
          <ButtonTransparent>See Product</ButtonTransparent>
        </div>
      </section>

      <BestAudioGear />
    </>
  );
};

export default Home;
