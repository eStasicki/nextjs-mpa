import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
//import { getMyProjects } from '@/queries/getMyProjects';

import { parseCookies } from 'nookies';

function Projects({ myProjectsQuery }) {
  return (
    <>
      <NextSeo title={'Projekty'} description={'Opis strony tutaj'} />
      <p>Testowanie SEO</p>

      <h2>Lista projektów per User</h2>
      <hr />
      {/* {console.log('UserID: ' + myProjects)} */}
      <hr />
      <br />
      <Query query={myProjectsQuery}>
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

Projects.getInitialProps = async (ctx) => {
  const cookies = parseCookies();
  const currentUserId = cookies.userId;

  const myProjectsQuery = gql`
    {
      posts(where: { author: ${currentUserId} }) {
        nodes {
          title
          id
        }
      }
    }
  `;

  return {
    myProjectsQuery,
  };
};

export default Projects;
