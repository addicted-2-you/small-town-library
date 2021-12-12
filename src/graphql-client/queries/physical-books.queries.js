import { gql } from '@apollo/client';

export const GET_PHYSICAL_BOOKS = gql`
  query GetPhysicalBooks($searchQuery: String) {
    getPhysicalBooks(searchQuery: $searchQuery) {
      id
      name
      publishingDate
    }
  }
`;

export const GET_GROUPED_PHYSICAL_BOOKS = gql`
  query GetGroupedPhysicalBooks($searchQuery: String) {
    getGroupedPhysicalBooks(searchQuery: $searchQuery) {
      id
      name
      count
      publishingDate
    }
  }
`;

export const GET_PHYSICAL_BOOKS_GROUP_LIST = gql`
  query GetPhysicalBooksGroupList($name: String, $publishingDate: String) {
    getPhysicalBooksGroupList(name: $name, publishingDate: $publishingDate) {
      id
      name
      publishingDate
    }
  }
`;
