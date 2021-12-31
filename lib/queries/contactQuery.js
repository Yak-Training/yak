import { gql } from '@apollo/client';

export default gql`
query contactQuery {
    contacts {
      description {
        html
      }
      heroImage {
        url
      }
    }
  }
`;
