import { useMutation } from '@apollo/client';

// gql
// import { GET_ALL_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';
import { DELETE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';

export function useAbstractBookDelete() {
  const [deleteAbstractBookMutation] = useMutation(DELETE_ABSTRACT_BOOK, {
    update(proxy, { data: { deleteAbstractBook } }) {
      // TODO: fix updating local cache
      // const { getAbstractBooks: abstractBooks } = proxy.readQuery({
      //   query: GET_ALL_ABSTRACT_BOOKS,
      // });
      // proxy.writeQuery({
      //   query: GET_ALL_ABSTRACT_BOOKS,
      //   data: {
      //     getAbstractBooks: abstractBooks.filter(
      //       (abstractBook) => abstractBook.id !== deleteAbstractBook.id,
      //     ),
      //   },
      // });
    },
  });

  return deleteAbstractBookMutation;
}
