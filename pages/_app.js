import Header from '@/components/Header';
import Login from '@/components/Login';
import LeftSidebar from '@/components/LeftSidebar';
import '@/styles/globals.scss';
import styles from '@/components/AppWrapper/AppWrapper.module.scss';
import classNames from 'classnames/bind';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
let cx = classNames.bind(styles);

import { useRouter } from 'next/router';

import { parseCookies } from 'nookies';

import Router from 'next/router';

const { API_URL } = process.env;

const client = new ApolloClient({
  uri: API_URL,
});

function MyApp({ Component, pageProps, userSecret }) {
  const router = useRouter();
  const cookies = parseCookies();

  return (
    <>
      <ApolloProvider client={client}>
        {userSecret !== undefined ? (
          <>
            <DefaultSeo {...SEO} />
            <Header
              username={cookies.userNicename}
              userGroup={cookies.userRole}
            />
            <LeftSidebar />
            <div className={cx('box')}>
              <div className={cx('container')}>
                <Component {...pageProps} />
              </div>
            </div>
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const userSecret = parseCookies(ctx).userSecret;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    userSecret,
  };
};

export default MyApp;
