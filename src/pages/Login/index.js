import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "~/pages/Login/Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  useEffect(() => {
    document.title = "Log in / register | TEDDIE BROWN";
  });
  return <div className={cx("Login")}>Login</div>;
}

export default Login;
