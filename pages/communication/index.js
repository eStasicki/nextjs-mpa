import { NextSeo } from 'next-seo';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './communication.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

// Components
import CommunicationTopMenu from '@/components/CommunicationTopMenu';
import CustomCheckbox from '@/components/CustomCheckbox';

import customEmailsDatas from './customEmailsDatas.json';

const scroll = { targetDiv: { height: '100%' } };

function Communication() {
  const emeilItems = customEmailsDatas;
  return (
    <>
      <NextSeo title={'Komunikacja'} description={'Opis strony tutaj'} />
      <CommunicationTopMenu />
      <div className={cx('wrapper')}>
        <Scrollbars
          autoHeightMin={scroll.targetDiv.height}
          autoHeightMax={1000}
          universal={true}
          className={cx('scrollbars-container')}
        >
          <ul className={cx('email-items')}>
            {emeilItems.map((email) => {
              return (
                <li key={email.id}>
                  <CustomCheckbox />
                  <span className={cx('item')}>{email.subject}</span>
                </li>
              );
            })}
          </ul>
        </Scrollbars>
      </div>
    </>
  );
}

export default Communication;
