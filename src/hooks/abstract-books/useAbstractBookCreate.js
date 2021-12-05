import { useMutation } from '@apollo/client';

// gql
import { CREATE_ABSTRACT_BOOK } from '~/graphql-client/mutations/abstract-books.mutations';
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

export function useAbstractBookCreate() {
  const [createAbstractBookMutation] = useMutation(CREATE_ABSTRACT_BOOK, {
    update(proxy, { data: { createAbstractBook } }) {
      const { getAbstractBooks: abstractBooks } = proxy.readQuery({
        query: GET_ABSTRACT_BOOKS,
      });

      proxy.writeQuery({
        query: GET_ABSTRACT_BOOKS,
        data: {
          getAbstractBooks: [...abstractBooks, createAbstractBook],
        },
      });
    },
  });

  return createAbstractBookMutation;
}
