import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors($id: String) {
    getAuthors(id: $id) {
      id
      name
      patronum
      surname
    }
  }
`;
