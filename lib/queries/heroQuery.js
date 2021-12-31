import { gql } from '@apollo/client';

export default gql`
query heroQuery {
    heroes {
      heroText
      image {
        url
      }
    }
  }
`;
