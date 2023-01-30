import styles from "./intro.module.css";
import imageShirt from "../../../assets/ake-problemy-riesime@2x.webp";
import { motion } from "framer-motion";

const Intro = () => {
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
    <section id="introID" className={`${styles.intro} sitePadding`}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <img src={imageShirt} alt="Ake problemy riesime" />
        </div>
        <div>
          <motion.h2 initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true, amount: 0.1 }} className={styles.heading} variants={animate}>Aké problémy riešime</motion.h2>
          <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true, amount: 0.1 }}>
            <motion.p className={styles.text} variants={animate}>
              Tvoríme technológie integrované v odevoch, ktoré analyzujú všetko, čo človeku pomáha robiť lepšie
              rozhodnutia v rámci svojho zdravia.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.list}>
          <motion.li
            className={styles.listItem}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
            variants={animate}
          >
            <span className={styles.listItemNumber}>01.</span>
            <h3 className={styles.listItemText}>Analyzovanie polohy vášho tela</h3>
          </motion.li>
          <motion.li
            variants={animate}
            className={styles.listItem}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className={styles.listItemNumber}>02.</span>
            <h3 className={styles.listItemText}>Analyzovanie rôznych pohybových dát</h3>
          </motion.li>
          <motion.li
            className={styles.listItem}
            variants={animate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className={styles.listItemNumber}>03.</span>
            <h3 className={styles.listItemText}>Analyzovanie fyziologických procesov</h3>
          </motion.li>
          <motion.li
            className={styles.listItemLast}
            variants={animate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className={styles.listItemNumber}>04.</span>
            <div>
              <h3 className={styles.listItemText}>Vyhodnocovanie získaných dát</h3>
              <p className={styles.note}>A mnoho ďalšieho...</p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
