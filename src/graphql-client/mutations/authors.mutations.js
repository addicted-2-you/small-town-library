import { gql } from '@apollo/client';

export const CREATE_AUTHOR = gql`
  mutation createAuthor($name: String!, $surname: String, $patronum: String) {
    createAuthor(name: $name, surname: $surname, patronum: $patronum) {
      name
      surname
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation deleteAuthor($authorId: String) {
    deleteAuthor(authorId: $authorId) {
      id
    }
  }
`;
