import gql from 'graphql-tag';

export const getSidebarMenu = gql`
  {
    menuItems(where: { location: SIDEBAR_MENU }) {
      nodes {
        id
        label
        url
      }
    }
  }
`;

export default getSidebarMenu;
