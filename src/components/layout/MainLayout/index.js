import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import L_site from "~/components/layout/components/L_site";
import L_site_aside from "~/components/layout/components/L_site_aside";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("MainLayout")}>
      <header className={cx("l-header")}>
        <L_site />
        <L_site_aside />
      </header>
      <main className={cx("main")}>{children}</main>
    </div>
  );
}

export default MainLayout;
