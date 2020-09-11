import { NextSeo } from 'next-seo';
import styles from './Communication.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

function Communication() {
  return (
    <>
      <NextSeo title={'Komunikacja'} description={'Opis strony tutaj'} />
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
    </>
  );
}

export default Communication;
