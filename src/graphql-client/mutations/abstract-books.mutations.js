import { gql } from '@apollo/client';

// export const CREATE_ABSTRACT_BOOK = gql``;

// export const UPDATE_ABSTRACT_BOOK = gql``;

export const DELETE_ABSTRACT_BOOK = gql`
  mutation DeleteAbstractBook($bookId: String) {
    deleteAbstractBook(bookId: $bookId) {
      id
    }
  }
`;
