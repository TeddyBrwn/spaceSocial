import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./L_site_aside.module.scss";
import {} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Popin from "../Popin";
import Search from "../Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function L_site_aside() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={cx("l-header-aside__nav")}>
        <div className={cx("l-header__icon")}>
          <div className={cx("c-topsearch")}>
            <button
              onClick={() => setOpen(true)}
              className={cx("c-topsearch__button")}
            >
              <i className={cx("c-icon--search")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            </button>
          </div>
          <div className={cx("l-header_menuItems")}>
            <div className={cx("l-header__login")}>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className={cx("l-header-aside--poping")}>
          <div
            onClick={() => setOpen(false)}
            className={cx("c-popin_overlay")}
          ></div>
          <div className={cx("c-popin_container")}>
            <button
              onClick={() => setOpen(false)}
              className={cx("close-Popin")}
            >
              <i>
                <FontAwesomeIcon icon={faXmark} />
              </i>
            </button>
            <Search />
          </div>
        </div>
      )}
    </div>
  );
}

export default L_site_aside;
