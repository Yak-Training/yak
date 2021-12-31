import { gql } from '@apollo/client';

export default gql`
query blogListQuery {
    blogLists {
      description {
        html
      }
      heroImage {
        url
      }
    }
  }
`;
