import { gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
  query {
    getAllBooks {
      id
      name
      author_id
      publisher_id
      publishing_date
    }
  }
`;
