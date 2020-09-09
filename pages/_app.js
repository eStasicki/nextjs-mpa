import Header from '@/components/Header'
import LeftSidebar from '@/components/LeftSidebar'
import '@/styles/globals.scss'
import styles from '@/components/AppWrapper/AppWrapper.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <LeftSidebar />
        <div className={cx("box")}>
          <div className={cx("container")}>
            <Component {...pageProps} />
          </div>
        </div>
        
    </>
  )
}

export default MyApp