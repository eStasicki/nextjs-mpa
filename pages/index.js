import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import { getAllPosts } from '@/queries/getAllPosts';
import { parseCookies } from 'nookies';
import Router from 'next/router';
const cookies = parseCookies();
console.log(cookies);

function Index() {
  return (
    <>
      <NextSeo title={'Przegląd projektów'} description={'Opis strony tutaj'} />
      <p>To jest strona: "Przegląd projektów"</p>

      <Query query={getAllPosts}>
        {({ loading, error, data }) => {
          if (loading) return <div>Wczytywanie...</div>;
          if (error) return false;
          return (
            <div>
              {data.posts.nodes.length > 0 ? (
                <>
                  {data.posts.nodes.map((post) => (
                    <p key={post.id}>{post.title}</p>
                  ))}
                </>
              ) : (
                'Nie posiadasz żadnych projektów'
              )}
            </div>
          );
        }}
      </Query>
    </>
  );
}

// Index.getInitialProps = async ctx => {
//   let pageProps = {}
//   const userSecret = parseCookies(ctx).userSecret;

//   Router.push("/");

// }

export default Index;
