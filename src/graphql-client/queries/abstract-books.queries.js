import { gql } from '@apollo/client';

export const GET_ALL_ABSTRACT_BOOKS = gql`
  query GetAllAbstractBooks {
    getAbstractBooks {
      id
      name
      description
    }
  }
`;

export const GET_ABSTRACT_BOOKS = gql`
  query GetAbstractBooks($searchQuery: String) {
    getAbstractBooks(searchQuery: $searchQuery) {
      id
      name
      description
    }
  }
`;

export const GET_ABSTRACT_BOOK = gql`
  query GetAbstractBook($bookId: String) {
    getAbstractBooks(bookId: $bookId) {
      id
      name
      description
      authors {
        id
        name
        surname
        patronum
      }
    }
  }
`;
