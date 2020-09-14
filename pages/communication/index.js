import { NextSeo } from 'next-seo';
import Link from '@/components/Link';
import { Query } from 'react-apollo';
import { getCommunicationTopMenu } from '@/queries/getCommunicationTopMenu';
import styles from '@/components/CommunicationTopMenu/CommunicationTopMenu.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

function Communication() {
  return (
    <>
      <NextSeo title={'Komunikacja'} description={'Opis strony tutaj'} />
      <Query query={getCommunicationTopMenu}>
        {({ loading, error, data }) => {
          if (loading) return <p>Wczytywanie...</p>;
          if (error) return false;
          return (
            <ul className={cx('top-bar')}>
              {data.menuItems.nodes.length > 0 ? (
                <>
                  {data.menuItems.nodes.map((menu) => (
                    <li key={menu.id}>
                      <Link activeClassName={cx('active')} href={menu.url}>
                        <a>{menu.label}</a>
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                'Brak pozycji w menu.'
              )}
            </ul>
          );
        }}
      </Query>
    </>
  );
}

export default Communication;
