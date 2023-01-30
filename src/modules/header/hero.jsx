import styles from "./hero.module.css";
import shirtIMGMobile from "../../assets/tricko-header-mobil@2x.webp";
import shirtIMGDesktop from "../../assets/tricko-header@2x.webp";
import pattern from "../../assets/pattern-header.svg";
import useWindowDimensions from "../../util/WindowDimensions";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { width } = useWindowDimensions();
  const mobileBreakpoint = 767;

  let { scrollYProgress } = useScroll();
  let y = useTransform( scrollYProgress, [0,1], ['0%','100%']);

  const animate = {
    offscreen: {
      y: 40,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const animateWithDelay = {
    offscreen: {
      y: 40,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  }

  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const siteMainNav = document.getElementById("siteMainNav");

    let headerOffset = siteMainNav.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll(item) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    windowScroll();
  };

  return (
    <div id="heroID" className={`${styles.hero} sitePadding`}>
      <motion.div className={styles.imageContainer} style={{y}}>
        {width <= mobileBreakpoint ? (
          <img src={shirtIMGMobile} alt="heroImage" />
        ) : (
          <img src={shirtIMGDesktop} alt="heroImage" />
        )}
        <img src={pattern} alt="heroPattern" className={styles.pattern} />
      </motion.div>
      <motion.h1
        className={styles.heading}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.1 }}
        variants={animate}
      >
        <span className={styles.wordFix}>prepájame</span> elektroniku{" "}
        <span className={styles.wordFix}>a textílie pre </span>lepšie pochopenie{" "}
        <span className={styles.wordFix}>našej fyziológie</span>
      </motion.h1>
      <motion.p
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.1 }}
        variants={animateWithDelay}
        className={styles.link}
        onClick={() => {
          scrollHandler("introID");
        }}
      >
        Aké problémy riešime?
      </motion.p>
    </div>
  );
};

export default Hero;
