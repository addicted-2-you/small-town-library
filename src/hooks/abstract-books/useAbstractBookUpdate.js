import { useMutation } from '@apollo/client';

// gql
import { UPDATE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

export function useAbstractBookUpdate() {
  const [udpateAbstractBookMutation] = useMutation(UPDATE_ABSTRACT_BOOK, {
    update(proxy, { data: { updateAbstractBook } }) {
      const { getAbstractBooks: abstractBooks } = proxy.readQuery({
        query: GET_ABSTRACT_BOOKS,
      });

      proxy.writeQuery({
        query: GET_ABSTRACT_BOOKS,
        data: {
          getAbstractBooks: abstractBooks.map((abstractBook) =>
            abstractBook.id === updateAbstractBook.id
              ? { ...abstractBook, ...updateAbstractBook }
              : abstractBook,
          ),
        },
      });
    },
  });

  return udpateAbstractBookMutation;
}
