import Header from '@/components/Header'
import Login from '@/components/Login'
import LeftSidebar from '@/components/LeftSidebar'
import '@/styles/globals.scss'
import styles from '@/components/AppWrapper/AppWrapper.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
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
        
    </>
  )
}

export default MyApp