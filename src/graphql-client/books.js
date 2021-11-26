import { gql } from '@apollo/client';

export const GET_ABSTRACT_BOOKS = gql`
  query GetAbstractBooks {
    getAbstractBooks {
      id
      name
      description
      author {
        id
        name
        surname
        patronum
      }
    }
  }
`;
