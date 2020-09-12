import styles from './Header.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

function CommunicationTopMenu({ username, userGroup }) {
  return (
    <ul className={cx('top-bar')}>
      <li>
        <a href="#">Nowa wiadomość</a>
      </li>
      <li>
        <a href="">Skrzynka odbiorcza</a>
      </li>
      <li>
        <a href="">Skrzynka nadawcza</a>
      </li>
      <li>
        <a href="">Rozliczenia</a>
      </li>
    </ul>
  );
}

export default CommunicationTopMenu;
