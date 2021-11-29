import { useMutation } from '@apollo/client';

// gql
import { GET_AUTHORS } from '~/graphql-client/authors';
import { CREATE_AUTHOR } from '~/graphql-client/mutations/authors.mutations';

export function useAuthorCreate() {
  const [createAuthorMutation] = useMutation(CREATE_AUTHOR, {
    update(proxy, { data: { createAuthor } }) {
      const { getAuthors: authors } = proxy.readQuery({
        query: GET_AUTHORS,
      });

      proxy.writeQuery({
        query: GET_AUTHORS,
        data: {
          getAuthors: [...authors, createAuthor],
        },
      });
    },
  });

  return createAuthorMutation;
}
