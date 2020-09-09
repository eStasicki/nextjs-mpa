import styles from './Login.module.scss'
import classNames from "classnames/bind";
import { NextSeo } from 'next-seo';
let cx = classNames.bind(styles);

function Login() {
  return (
    <>
    <NextSeo
      title={"Logowanie do aplikacji"}
      description={"Panel logowania"} 
    />
    <div className={cx("wrapper")}>
      <div className={cx("form-box")}>
        <form>
          <div className={cx("email-box")}>
            <p>Adres e-mail</p>
            <input type="text" />
          </div>
          <div className={cx("password-box")}>
            <p>Hasło:</p>
            <input type="password"/>
          </div>
          <div className={cx("buttons-box")}>
            <button type="submit">Zaloguj się</button>
            <button className={cx("register")}>Rejestracja</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login