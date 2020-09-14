import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { parseCookies } from 'nookies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Projects({ myProjectsQuery }) {
  return (
    <>
      <NextSeo title={'Projekty'} />

      <h2>
        Lista projektów per User <FontAwesomeIcon icon={faCoffee} />
      </h2>
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

Projects.getInitialProps = async () => {
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
