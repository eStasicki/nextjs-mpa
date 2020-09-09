import Link from '@/components/Link'

import styles from './LeftSidebar.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function LeftSidebar() {
  return (
    <div className={cx("wrapper")}>
      <ul>
      <li>
        <Link activeClassName={cx("active")} href="/">
          <a>Przegląd projektów</a>
        </Link>
      </li>
      <li>
        <Link activeClassName={cx("active")} href="/Projects">
          <a className='nav-link'>Projekty</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default LeftSidebar