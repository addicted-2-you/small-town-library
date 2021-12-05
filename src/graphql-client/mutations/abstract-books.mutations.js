import { gql } from '@apollo/client';

export const CREATE_ABSTRACT_BOOK = gql`
  mutation CreateAbstractBook($name: String!) {
    createAbstractBook(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_ABSTRACT_BOOK = gql`
  mutation UpdateAbstractBook($bookId: String!, $name: String!) {
    updateAbstractBook(bookId: $bookId, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_ABSTRACT_BOOK = gql`
  mutation DeleteAbstractBook($bookId: String) {
    deleteAbstractBook(bookId: $bookId) {
      id
    }
  }
`;
