import { gql } from '@apollo/client';

export const GET_ABSTRACT_BOOKS = gql`
  query GetAbstractBooks($searchQuery: String) {
    abstractBooks(searchQuery: $searchQuery) {
      id
      name
    }
  }
`;

export const GET_ABSTRACT_BOOK = gql`
  query GetAbstractBook($id: String) {
    abstractBooks(id: $id) {
      id
      name
    }
  }
`;
