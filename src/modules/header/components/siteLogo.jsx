import siteLogoIMG from "../../../assets/skinekt-logo-header.svg";
import styles from "./siteLogo.module.css";
import { useHref } from "react-router-dom";
import { Link } from "react-router-dom";

const SiteLogo = () => {
  const urlRef = useHref();

  const scrollHandler = (item) => {
    if (urlRef !== "/") return;
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
    <Link to='/'>
      <div className={styles.siteLogo}>
        <img
          src={siteLogoIMG}
          alt="skinext"
          onClick={() => {
            scrollHandler("heroID");
          }}
        />
      </div>
    </Link>
  );
};

export default SiteLogo;
