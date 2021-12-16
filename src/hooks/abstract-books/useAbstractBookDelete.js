import { useMutation } from '@apollo/client';

// gql
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';
import { DELETE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';

export function useAbstractBookDelete(searchQuery) {
  const [deleteAbstractBookMutation] = useMutation(DELETE_ABSTRACT_BOOK, {
    update(proxy, { data: { deleteAbstractBook } }) {
      const { getAbstractBooks: abstractBooks } = proxy.readQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
      });

      proxy.writeQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
        data: {
          getAbstractBooks: abstractBooks.filter(
            (abstractBook) => abstractBook.id !== deleteAbstractBook.id,
          ),
        },
      });
    },
  });

  return deleteAbstractBookMutation;
}
