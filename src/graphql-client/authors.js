import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors {
    getAuthors {
      id
      name
      patronum
      surname
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthors($id: String!) {
    getAuthors(id: $id) {
      id
      name
      patronum
      surname
      books {
        id
        name
      }
    }
  }
`;
