import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "~/pages/Home/Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  useEffect(() => {
    document.title = "TEDDIE BROWN";
  }, []);
  return <div className={cx("home")}>main</div>;
}

export default Home;
