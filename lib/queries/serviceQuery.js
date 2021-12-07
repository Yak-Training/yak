import { gql } from '@apollo/client';

export default gql`
query servicesQuery {
  services {
    description {
      html
    }
    image {
      url
    }
    title
    id
  }
  }
`;
