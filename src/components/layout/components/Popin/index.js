import classNames from "classnames/bind";
import styles from "./Poping.module.scss";
import Search from "../Search";

const cx = classNames.bind(styles);

function Popin() {
  return (
    <div className={cx("l-header-aside--poping")}>
      <div className={cx("c-popin_overlay")}></div>
      <div className={cx("c-popin_container")}>
        <Search />
      </div>
    </div>
  );
}

export default Popin;
