import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors($id: String) {
    authors(id: $id) {
      id
      name
      patronum
      surname
    }
  }
`;
