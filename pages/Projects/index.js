import { NextSeo } from 'next-seo';
import { Query } from 'react-apollo';
import { getMyProjects } from '@/queries/getMyProjects';

function Projects() {
  return (
    <>
      <NextSeo title={'Projekty'} description={'Opis strony tutaj'} />
      <p>Testowanie SEO</p>

      <h2>Lista projektów per User</h2>
      <hr />
      <Query query={getMyProjects}>
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

export default Projects;
