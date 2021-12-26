import { useMutation } from '@apollo/client';

// gql
import { DELETE_PHYSICAL_BOOK } from '~/graphql-client/mutations/physical-books.mutations';
import {
  GET_GROUPED_PHYSICAL_BOOKS,
  GET_PHYSICAL_BOOKS_GROUP_LIST,
} from '~/graphql-client/queries/physical-books.queries';

export function usePhysicalBookDelete({ name, publishingDate, searchQuery }) {
  const [deletePhysicalBookMutation] = useMutation(DELETE_PHYSICAL_BOOK, {
    update(cache, { data: { deletePhysicalBook } }) {
      const { physicalBooksGroupList } = cache.readQuery({
        query: GET_PHYSICAL_BOOKS_GROUP_LIST,
        variables: { name, publishingDate },
      });

      const { groupedPhysicalBooks } = cache.readQuery({
        query: GET_GROUPED_PHYSICAL_BOOKS,
        variables: { searchQuery },
      });

      cache.writeQuery({
        query: GET_PHYSICAL_BOOKS_GROUP_LIST,
        variables: { name, publishingDate },
        data: {
          physicalBooksGroupList: physicalBooksGroupList.filter(
            (item) => item.id !== deletePhysicalBook.id,
          ),
        },
      });

      cache.writeQuery({
        query: GET_GROUPED_PHYSICAL_BOOKS,
        variables: { searchQuery },
        data: {
          groupedPhysicalBooks: groupedPhysicalBooks
            .map((item) =>
              item.name === name && item.publishingDate === publishingDate
                ? { ...item, count: item.count - 1 }
                : item,
            )
            .filter((item) => !!item.count),
        },
      });
    },
  });

  return deletePhysicalBookMutation;
}
