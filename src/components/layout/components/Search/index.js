import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Popin from "../Popin";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  return (
    <div>
      <div className={cx("c-popin-header")}>
        <button className={cx("close-Popin")}>
          <i>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </button>
        <form role="search" method="get">
          <div className={cx("c-topsearch--popin__result")}>
            <input
              ref={inputRef}
              value={searchValue}
              className={cx("c-form__input")}
              placeholder="SEARCH"
              checkSpell={false}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {!!searchValue && (
              <button
                onClick={handleClear}
                className={cx("c-topsearch--popin__clear")}
              >
                CLEAR
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
