import styles from './Header.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <div className={cx("container", "test")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nisi delectus quasi. Veritatis voluptatibus sequi sint perferendis corrupti porro. Atque delectus numquam laudantium aliquid, rem dolorum doloremque mollitia sed autem.
      </div>
    </header>
  )
}

export default Header