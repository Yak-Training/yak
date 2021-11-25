import { gql } from '@apollo/client';

export default gql`
query teamsQuery {
  teamsConnection(first: 10) {
    edges {
      node {
        image {
          url
        }
        name
        bio {
          html
        }
        role
      }
    }
  }
}`;
