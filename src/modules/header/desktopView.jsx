import Account from "./components/account";
import Menu from "./components/menu";
import SiteLogo from "./components/siteLogo";

import styles from './desktopView.module.css'

const DesktopView = () => {
  return (
    <div className={`${styles.desktop} sitePadding flexCenter`}>
      <SiteLogo />
      <Menu />
      <Account />
    </div>
  );
};

export default DesktopView;
