import gql from 'graphql-tag';
import { parseCookies } from 'nookies';

//const cookies = parseCookies();

export const getMyProjects = gql`
  {
    posts(where: { author: ${ID} }) {
      nodes {
        title
        id
      }
    }
  }
`;

export default getMyProjects;
