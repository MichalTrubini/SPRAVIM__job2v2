import styles from "./copyright.module.css";

const Copyright = (props) => {
  return <p className={`${styles.copyright} ${props.className}`}>© 2023 Skinekt - Power of elektronics in textile</p>;
};

export default Copyright;
