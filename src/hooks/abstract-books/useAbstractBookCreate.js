import { useMutation } from '@apollo/client';

// gql
import { CREATE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

export function useAbstractBookCreate(searchQuery) {
  const [createAbstractBookMutation] = useMutation(CREATE_ABSTRACT_BOOK, {
    update(proxy, { data: { createAbstractBook } }) {
      const { abstractBooks } = proxy.readQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
      });

      proxy.writeQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
        data: {
          abstractBooks: [...abstractBooks, createAbstractBook],
        },
      });
    },
  });

  return createAbstractBookMutation;
}
