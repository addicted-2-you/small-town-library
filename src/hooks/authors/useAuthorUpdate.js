import { useMutation } from '@apollo/client';

// gql
import { UPDATE_AUTHOR } from '~/graphql-client/mutations/authors.mutations';

export function useAuthorUpdate() {
  const [updateAuthorMutation] = useMutation(UPDATE_AUTHOR);
  return updateAuthorMutation;
}
