import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      patronum
      surname
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthors($id: String) {
    authors(id: $id) {
      id
      name
      patronum
      surname
    }
  }
`;
