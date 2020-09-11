import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { NextSeo } from 'next-seo';
let cx = classNames.bind(styles);
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

const { API_URL_REST } = process.env;

function Login() {
  const siteUrl = API_URL_REST;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageText, setMessageText] = useState('');

  async function handleLogin() {
    const loginInfo = {
      username: username,
      password: password,
    };

    const login = await fetch(`${siteUrl}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();

    if (loginResponse.token != undefined) {
      setCookie(null, 'userSecret', loginResponse.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'userEmail', loginResponse.user_email, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'userNicename', loginResponse.user_nicename, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'userDisplayName', loginResponse.user_display_name, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'userRole', loginResponse.user_role[0], {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'userId', loginResponse.user_id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      Router.push('/');
    } else {
      setMessageText(loginResponse.message);
      setTimeout(
        function () {
          setMessageText(false);
        }.bind(this),
        5000
      );
    }
  }

  return (
    <>
      <NextSeo
        title={'Logowanie do aplikacji'}
        description={'Panel logowania'}
      />
      <div className={cx('wrapper')}>
        {messageText && (
          <div
            className={cx('alert-box')}
            dangerouslySetInnerHTML={{ __html: messageText }}
          />
        )}
        <div className={cx('form-box')}>
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className={cx('email-box')}>
              <p>Adres e-mail</p>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className={cx('password-box')}>
              <p>Hasło:</p>
              <input
                type="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className={cx('buttons-box')}>
              <button type="button" onClick={() => handleLogin()}>
                Zaloguj się
              </button>
              <button
                className={cx('register')}
                onClick={() => Router.push('/register')}
              >
                Rejestracja
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
