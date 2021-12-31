import { gql } from '@apollo/client';

export default gql`
query eventListQuery {
    eventLists {
      description {
        html
      }
      heroImage {
        url
      }
    }
  }
`;
