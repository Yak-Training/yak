import { gql } from '@apollo/client';

export default gql`
query onzeAanpakQuery {
    onzeAanpaks {
      description {
        html
      }
      heroImage {
        url
      }
    }
  }
`;
