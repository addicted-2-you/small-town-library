import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation authorize($login: String!, $password: String!) {
    authorize(login: $login, password: $password) {
      token
    }
  }
`;
