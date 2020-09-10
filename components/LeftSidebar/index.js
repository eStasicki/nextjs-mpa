import Link from '@/components/Link'
import { Query } from "react-apollo"
import { getSidebarMenu } from "@/queries/getSidebarMenu"
import styles from './LeftSidebar.module.scss'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function LeftSidebar() {
  return (
    <div className={cx("wrapper")}>
      <Query query={getSidebarMenu}>
        {({ loading, error, data }) => {
          if (loading)
          return (
            <div>Wczytywanie menu...</div>
          )
          if (error) return false
          return (
            <ul>
                { data.menuItems.nodes.length > 0 ? 
                  <>
                  {data.menuItems.nodes.map((menu) => (
                    <li>
                      <Link activeClassName={cx("active")} href={menu.url}>
                        <a>{menu.label}</a>
                      </Link>
                    </li>
                  ))}
                  </>
                  : "Brak pozycji w menu."
                }
            </ul>
          )
        }}
      </Query>
    </div>
  )
}

export default LeftSidebar