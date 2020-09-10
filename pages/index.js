import { NextSeo } from 'next-seo';

import { Query } from "react-apollo"
import gql from "graphql-tag"

const GET_POSTS = gql`
  {
    posts(where: {author: ${1}}) {
      nodes {
        title
        id
      }
    }
  }
`

function Index() {
  return (
    <>
    <NextSeo
      title={"Przegląd projektów"}
      description={"Opis strony tutaj"} 
    />
    <p>To jest strona: "Przegląd projektów"</p>

    <Query query={GET_POSTS}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div>
                Wczytywanie...
              </div>
            )
          if (error) return false
          return (
            <div>
                { data.posts.nodes.length > 0 ? 
                  <>
                  {data.posts.nodes.map((post, index) => (
                    <p key={post.id}>{post.title}</p>
                  ))}
                  </>
                  : "Nie posiadasz żadnych projektów"
                }
            </div>
          )
        }}
      </Query>

    </>
  )
}

export default Index