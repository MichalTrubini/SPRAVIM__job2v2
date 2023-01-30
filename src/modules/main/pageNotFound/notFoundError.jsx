import styles from "./notFoundError.module.css";
import { Link } from "react-router-dom";
import Copyright from "../../footer/copyright";
import { useEffect, useState } from "react";
import pattern from "../../../assets/404-pattern.svg";

const NotFoundError = () => {
  const [elHeight, setElHeight] = useState(0);

  useEffect(() => {
    const siteHeader = document.getElementById("siteMainNav");
    const siteHeaderHeight = siteHeader.getBoundingClientRect().height;
    setElHeight(siteHeaderHeight);
  }, [elHeight]);

  return (
    <div style={{ minHeight: `calc(100vh - ${elHeight}px)` }} className={styles.notFound}>
      <div className={styles.wrapper}>
        <div className={styles.pattern}>
          <img src={pattern} alt="pattern" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>Stránka sa nenašla</h1>
          <p className={styles.text}>Bohužiaľ, stránka nebola nájdená. Skúste prosím pokračovať na úvodnú stránku.</p>
          <Link to="/">
            <p className={styles.backLink}>Späť na úvodnú stránku</p>
          </Link>
        </div>
      </div>
      <Copyright className={styles.copyright}/>
    </div>
  );
};

export default NotFoundError;
