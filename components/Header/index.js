import styles from './Header.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <span className={cx("user-profile")}>Witaj, Ernest Stasicki</span>
      <span className={cx("right-buttons")}>
        <ul>
          <li><button className={cx("btn")}>Wyloguj się</button></li>
        </ul>
      </span>
    </header>
  )
}

export default Header