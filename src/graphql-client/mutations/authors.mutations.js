import { gql } from '@apollo/client';

export const CREATE_AUTHOR = gql`
  mutation createAuthor($name: String!, $surname: String, $patronum: String) {
    createAuthor(name: $name, surname: $surname, patronum: $patronum) {
      name
      surname
    }
  }
`;
