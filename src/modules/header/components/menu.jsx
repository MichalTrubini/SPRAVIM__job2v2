import styles from "./menu.module.css";
import { Link } from "react-scroll";

const Menu = (props) => {
  
  const close = () => {
    if (window.innerWidth < 1025) {
      props.onClickClose();
    }
  };

  return (
    <div>
      <ul className={styles.list}>
        <Link activeClass={styles.active} to="introID" spy={true} smooth={true} offset={-70} duration={500}>
          <li
            className={styles.listItem}
            onClick={() => {
              close();
            }}
          >
            čo riešime
          </li>
        </Link>
        <Link activeClass={styles.active} to="highlightsID" spy={true} smooth={true} offset={-70} duration={500}>
          <li
            className={styles.listItem}
            onClick={() => {
              close();
            }}
          >
            pre koho
          </li>
        </Link>
        <Link activeClass={styles.active} to="howID" spy={true} smooth={true} offset={-70} duration={500}>
          <li
            className={styles.listItem}
            onClick={() => {
              close();
            }}
          >
            ako to robíme
          </li>
        </Link>
        <Link activeClass={styles.active} to="footerID" spy={true} smooth={true} offset={-70} duration={500}>
          <li
            className={styles.listItem}
            onClick={() => {
              close();
            }}
          >
            kedy
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
