import { gql } from '@apollo/client';

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!, $surname: String, $patronum: String) {
    createAuthor(name: $name, surname: $surname, patronum: $patronum) {
      id
      name
      surname
      patronum
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($authorId: String!, $name: String, $surname: String, $patronum: String) {
    updateAuthor(authorId: $authorId, name: $name, surname: $surname, patronum: $patronum) {
      id
      name
      surname
      patronum
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($authorId: String) {
    deleteAuthor(authorId: $authorId) {
      id
    }
  }
`;
