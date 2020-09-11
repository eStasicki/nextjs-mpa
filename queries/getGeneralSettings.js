import gql from 'graphql-tag';

export const getGeneralSettings = gql`
  {
    generalSettings {
      url
      title
      timezone
      timeFormat
      startOfWeek
      language
      email
      description
      dateFormat
    }
  }
`;

export default getGeneralSettings;
