import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';

import { parseCookies } from 'nookies';

function Validation({ props }) {
  return (
    <>
      <NextSeo
        title={'Walidacja tokenu'}
        description={'Strona do walidowania tokenu'}
      />
      <h1>Walidacja Tokenu</h1>
      <br />
      <p>Aktualne dane pochodzące z Cookies:</p>
      <pre>
        Aktualny userID: {props.currentUserId}
        <br />
        Aktualny userRole: {props.currentUserRole}
        <br />
        Walidacja Tokenu: {props.userIdValidated}
      </pre>
      {console.log(props.currentUserId)}
      {console.log(props.userIdValidated)}
    </>
  );
}

Validation.getInitialProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const currentToken = cookies.userSecret;
  const currentUserId = cookies.userId;
  const currentUserRole = cookies.userRole;
  let userIdValidated = null;

  axios
    .post(
      'http://backend.estasicki.pl/myprojects/wp-json/jwt-auth/v1/token/validate',
      {},
      { headers: { Authorization: 'Bearer ' + currentToken } }
    )
    .then((res) => {
      if (res.data.data.status === 200) {
        userIdValidated = res.data.data.status;
        console.log(res.data);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      currentUserId,
      currentUserRole,
      userIdValidated,
    },
  };
};

export default Validation;
