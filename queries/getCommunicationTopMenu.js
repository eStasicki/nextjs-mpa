import gql from 'graphql-tag';

export const getCommunicationTopMenu = gql`
  {
    menuItems(where: { location: COMMUNICATION_TOP_MENU }) {
      nodes {
        id
        label
        url
      }
    }
  }
`;

export default getCommunicationTopMenu;
