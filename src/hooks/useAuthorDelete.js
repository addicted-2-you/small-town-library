import { useMutation } from '@apollo/client';

// gql
import { GET_AUTHORS } from '~/graphql-client/authors';
import { DELETE_AUTHOR } from '~/graphql-client/mutations/authors.mutations';

export function useAuthorDelete() {
  const [deleteAuthorMutation] = useMutation(DELETE_AUTHOR, {
    update(proxy, { data: { deleteAuthor } }) {
      const { getAuthors: authors } = proxy.readQuery({
        query: GET_AUTHORS,
      });

      proxy.writeQuery({
        query: GET_AUTHORS,
        data: {
          getAuthors: authors.filter((author) => author.id !== deleteAuthor.id),
        },
      });
    },
  });

  return deleteAuthorMutation;
}
