import { gql } from '@apollo/client';

export default gql`
query eventsQuery {
  events(first: 10) {
    description {
        html
      }
      image {
        url
      }
      title
      shortDescription
      slug
      date
      location
    }
  }
`;
