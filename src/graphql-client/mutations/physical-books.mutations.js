import { gql } from '@apollo/client';

export const CREATE_PHYSICAL_BOOK = gql`
  mutation CreatePhysicalBook($name: String!, $publishingDate: String!) {
    createPhysicalBook(name: $name, publishingDate: $publishingDate) {
      id
      name
      publishingDate
    }
  }
`;
