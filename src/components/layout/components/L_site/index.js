import classNames from "classnames/bind";
import styles from "./L_site.module.scss";
import images from "~/assets/images/";

const cx = classNames.bind(styles);

function L_site() {
  return (
    <div className={cx("l-header__nav")}>
      <div className={cx("l-header__logo")}>
        <a href="/" className={cx("l-header__logo__link")}>
          <img src={images.logo} alt="logo" />
        </a>
        <div className={cx("l-header__navcontainer")}>
          <div id={cx("mainmenu")} className={cx("c-nav__wrapper")}>
            <nav className={cx("c-nav__container")}>
              <div className={cx("c-nav__panel")}>
                <ul className={cx("c-nav__list")}>
                  <li data-level="true" className={cx("c-nav__item")}>
                    <a href="/">home</a>
                  </li>
                  <li data-level="true" className={cx("c-nav__item")}>
                    <a href="/messenger">messenger</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default L_site;
