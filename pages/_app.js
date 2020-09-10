import Header from '@/components/Header'
import Login from '@/components/Login'
import LeftSidebar from '@/components/LeftSidebar'
import '@/styles/globals.scss'
import styles from '@/components/AppWrapper/AppWrapper.module.scss'
import classNames from "classnames/bind"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
let cx = classNames.bind(styles)

import { useRouter } from 'next/router'

const { API_URL } = process.env

const client = new ApolloClient({
  uri: API_URL,
})

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <ApolloProvider client={client}>
        { router.route !== "/login" 
          ?
          <>
            
            <Header />
            <LeftSidebar />
            <div className={cx("box")}>
              <div className={cx("container")}>
                <Component {...pageProps} />
              </div>
            </div>
            
          </>
          :
          <>
            <Login />
          </>
          }
        </ApolloProvider>
    </>
  )
}

export default MyApp