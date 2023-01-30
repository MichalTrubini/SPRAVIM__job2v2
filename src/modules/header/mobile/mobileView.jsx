import hamburger from "../../../assets/menu-3-line.svg";
import styles from "./mobileView.module.css";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import SiteLogo from "../components/siteLogo";

const MobileView = () => {
  const [isShown, setIsShown] = useState(false);
  const [animate, setAnimate] = useState(false);

  const mobileMenuCloseHandler = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsShown(false);
      setAnimate(false);
    }, 500);
  };

  return (
    <>
      <div className={`${styles.mobileContainer} sitePadding`}>
        <SiteLogo />
        <img
          src={hamburger}
          alt="mobile"
          onClick={() => {
            setIsShown(true);
          }}
        />
      </div>
      {isShown ? <MobileMenu className={animate ? styles.mobileMenuSlideOut : styles.mobileMenuSlideIn} onClick={mobileMenuCloseHandler} /> : null}
    </>
  );
};

export default MobileView;
