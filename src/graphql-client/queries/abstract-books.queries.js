import { gql } from '@apollo/client';

export const GET_ABSTRACT_BOOKS = gql`
  query GetAbstractBooks($searchQuery: String) {
    getAbstractBooks(searchQuery: $searchQuery) {
      id
      name
      description
    }
  }
`;
