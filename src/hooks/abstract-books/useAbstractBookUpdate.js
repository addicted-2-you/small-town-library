import { useMutation } from '@apollo/client';

// gql
import { UPDATE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

export function useAbstractBookUpdate(searchQuery) {
  const [udpateAbstractBookMutation] = useMutation(UPDATE_ABSTRACT_BOOK, {
    update(proxy, { data: { updateAbstractBook } }) {
      const { abstractBooks } = proxy.readQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
      });

      proxy.writeQuery({
        query: GET_ABSTRACT_BOOKS,
        variables: { searchQuery },
        data: {
          abstractBooks: abstractBooks.map((abstractBook) =>
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
