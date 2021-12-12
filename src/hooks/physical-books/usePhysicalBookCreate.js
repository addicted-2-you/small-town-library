import { useMutation } from '@apollo/client';

// gql
import { CREATE_PHYSICAL_BOOK } from '~/graphql-client/mutations/physical-books.mutations';
import { GET_GROUPED_PHYSICAL_BOOKS } from '~/graphql-client/queries/physical-books.queries';

export function usePhysicalBookCreate(searchQuery) {
  const [createPhysicalBookMutation] = useMutation(CREATE_PHYSICAL_BOOK, {
    refetchQueries: [{ query: GET_GROUPED_PHYSICAL_BOOKS, variables: { searchQuery } }],
  });

  return createPhysicalBookMutation;
}
