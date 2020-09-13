import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import { getAllPosts } from '@/queries/getAllPosts';
import { parseCookies } from 'nookies';
const cookies = parseCookies();

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

export default Index;
