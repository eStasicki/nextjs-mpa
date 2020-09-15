import { NextSeo } from 'next-seo';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './communication.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

// Components
import CommunicationTopMenu from '@/components/CommunicationTopMenu';
import CustomCheckbox from '@/components/CustomCheckbox';

import customEmailsDatas from './customEmailsDatas.json';

const verticalScrollHeight = { vontainerHeight: { height: '100%' } };

function Communication() {
  const emailItems = customEmailsDatas;
  const emailItemsCount = emailItems.length;
  console.log(emailItemsCount);

  let emails;

  if (emailItemsCount > 10) {
    emails = (
      <Scrollbars
        autoHeightMin={verticalScrollHeight.vontainerHeight.height}
        autoHeightMax={1000}
        universal={true}
        className={cx('scrollbars-container')}
      >
        <ul className={cx('email-items')}>
          {emailItems.map((email) => {
            return (
              <li key={email.id}>
                <CustomCheckbox />
                <span className={cx('item')}>{email.subject}</span>
              </li>
            );
          })}
        </ul>
      </Scrollbars>
    );
  } else {
    emails = (
      <ul className={cx('email-items')}>
        {emailItems.map((email) => {
          return (
            <li key={email.id}>
              <CustomCheckbox />
              <span className={cx('item')}>{email.subject}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <NextSeo title={'Komunikacja'} description={'Opis strony tutaj'} />
      <CommunicationTopMenu />
      <div className={cx('wrapper')}>{emails}</div>
    </>
  );
}

export default Communication;
