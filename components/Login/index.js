import styles from './Login.module.scss'
import classNames from "classnames/bind"
import { NextSeo } from 'next-seo'
let cx = classNames.bind(styles)
import { useState, setState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

function Login() {

  const siteUrl = 'http://backend.estasicki.pl/myprojects';
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleLogin() {
    const loginInfo = {
      username: username,
      password: password,
    }

    const login = await fetch(`${siteUrl}/wp-json/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })

    const loginResponse = await login.json();

    if( loginResponse.token != undefined ) {

      setCookie(null, 'jwt', loginResponse.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      Router.push('/');
      console.log(loginResponse);
    }
    else {
      alert(loginResponse.message)
    }
    //Router.push('/');
    //console.log(loginResponse);

  }

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
            <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
          </div>
          <div className={cx("password-box")}>
            <p>Hasło:</p>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
          </div>
          <div className={cx("buttons-box")}>
            <button type="button" onClick={ () => handleLogin() } >Zaloguj się</button>
            <button className={cx("register")}>Rejestracja</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login