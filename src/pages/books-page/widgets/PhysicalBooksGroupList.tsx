import React from 'react';
import { useQuery } from '@apollo/client';

// gql
import { GET_PHYSICAL_BOOKS_GROUP_LIST } from '~/graphql-client/queries/physical-books.queries';

import { IPhysicalBook } from '~/models/physical-book.model';

import { EditButton, TrashButton } from '~/components/icon-buttons';
import { usePhysicalBookDelete } from '~/hooks/physical-books/usePhysicalBookDelete';

interface IPhysicalBooksGroupListProps {
  name: string;
  publishingDate: string;
}

function PhysicalBooksGroupList(props: IPhysicalBooksGroupListProps) {
  const { name, publishingDate, searchQuery } = props;

  const { loading, error, data } = useQuery(GET_PHYSICAL_BOOKS_GROUP_LIST, {
    variables: { name, publishingDate },
  });

  const deletePhysicalBookMutation = usePhysicalBookDelete({ name, publishingDate, searchQuery });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  function deletePhysicalBook(bookId) {
    deletePhysicalBookMutation({ variables: { bookId } });
  }

  const physicalBooks: IPhysicalBook[] = data.getPhysicalBooksGroupList;

  return (
    <div className="py-1 px-2 mt-5 bg-gray-300 bg-opacity-10">
      <ul className="space-y-1">
        {physicalBooks.map((book) => (
          <li
            className="py-1 px-2 flex justify-between items-center text-sm bg-gray-200 bg-opacity-80 rounded-md even:bg-gray-300"
            key={book.id}
          >
            <a className="hover:text-blue-500 hover:underline" href={`/physical-books/${book.id}`}>
              {book.name}-{book.id}
            </a>

            <span className="space-x-2">
              <EditButton onClick={() => {}} />

              <TrashButton onClick={() => deletePhysicalBook(book.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhysicalBooksGroupList;
