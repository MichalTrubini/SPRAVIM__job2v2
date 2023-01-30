import styles from "./video.module.css";
import videoImage from "../../../assets/video@2x.webp";
import ReactPlayer from "react-player";
import { useState } from "react";
import playIcon from "../../../assets/play-fill.svg";
import { motion } from "framer-motion";

const Video = () => {
  const [play, setPlay] = useState(false);

  const videoURL = "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U";

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

  return (
    <section id='howID' className={`${styles.video} sitePadding`}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>
          Ako to <span className={styles.headingFix}>všetko dokážeme</span>
        </h2>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.videoWrapper}>
          {!play ? (
            <div
              className={styles.imageContainer}
              onClick={() => {
                setPlay(true);
              }}
            >
              <img src={videoImage} alt="video" />
              <div className={styles.playIcon}>
                <img src={playIcon} alt="play" />
              </div>
            </div>
          ) : null}

          <ReactPlayer
            url={videoURL}
            width="100%"
            height="100%"
            className={styles.videoPlayer}
            playing={play}
            controls={true}
          />
        </div>
        <motion.p className={styles.text} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.1 }} variants={animate}>
          Poskladali ste tím technologických odborníkov a nadšencov a vyvýjame elektroniku, ktorá je súčasťou textílie.
          Aktuálne sa zameriavame predovšetkým na tričko a jeho prvotnú verziu pre uvedenie na trh. Jedná sa o revolučný
          prísup ku získavaniu fyziologických a pohybových dát.
        </motion.p>
      </div>
    </section>
  );
};

export default Video;
