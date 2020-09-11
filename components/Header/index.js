import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { destroyCookie } from 'nookies';
let cx = classNames.bind(styles);
import Router from 'next/router';

function Logout() {
  destroyCookie(null, 'userSecret');
  destroyCookie(null, 'userEmail');
  destroyCookie(null, 'userNicename');
  destroyCookie(null, 'userDisplayName');
  destroyCookie(null, 'userRole');
  destroyCookie(null, 'userId');
  Router.push('/login');
}

function Header({ username }) {
  return (
    <header className={cx('wrapper')}>
      <span className={cx('user-profile')}>Witaj, {username}</span>
      <span className={cx('right-buttons')}>
        <ul>
          <li>
            <button className={cx('btn')} onClick={Logout}>
              Wyloguj się
            </button>
          </li>
        </ul>
      </span>
    </header>
  );
}

export default Header;
