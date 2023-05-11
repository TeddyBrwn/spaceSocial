import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./L_site_aside.module.scss";
import {} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popin from "../Popin";

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
      {open && <Popin />}
    </div>
  );
}

export default L_site_aside;
