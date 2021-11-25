import { gql } from '@apollo/client';

export default gql`
query blogQuery {
  blogs(first: 10) {
    description {
        html
      }
      image {
        url
      }
      title
      slug
      shortDescription
      author
      date
    }
  }
`;
