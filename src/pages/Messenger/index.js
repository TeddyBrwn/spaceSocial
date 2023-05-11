import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "~/pages/Home/Home.module.scss";

const cx = classNames.bind(styles);

function Messenger() {
  useEffect(() => {
    document.title = "Messenger | TEDDIE BROWN";
  });
  return <div className={cx("Messenger")}>messenger</div>;
}

export default Messenger;
