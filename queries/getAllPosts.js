import gql from "graphql-tag"

export const getAllPosts = gql`
  {
    posts {
      nodes {
        title
        id
      }
    }
  }
`

export default getAllPosts