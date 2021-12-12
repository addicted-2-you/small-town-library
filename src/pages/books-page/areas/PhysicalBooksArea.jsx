import React from 'react';
import { useQuery } from '@apollo/client';

// gql
import { GET_GROUPED_PHYSICAL_BOOKS } from '~/graphql-client/queries/physical-books.queries';

// components
import { PlusButton } from '~/components/icon-buttons';
import { useModal } from '~/components/modal/useModal';

// modals
import PhysicalBookModal from '~/modals/PhysicalBookModal';

import GroupedPhysicalBooksItem from '../widgets/GroupedPhysicalBooksItem';

function PhysicalBooksArea({ searchQuery }) {
  const { loading, error, data } = useQuery(GET_GROUPED_PHYSICAL_BOOKS, {
    variables: { searchQuery },
  });

  const { showModal: showCreateBookModal } = useModal({
    ModalContent: () => <PhysicalBookModal searchQuery={searchQuery} />,
    inputs: [],
    title: 'Добавить книгу',
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const physicalBooks = data.getGroupedPhysicalBooks;

  return (
    <div className="px-3 py-2">
      <h3 className="text-md font-semibold text-right">Бумажные книги</h3>

      <div className="mt-3 flex justify-end">
        <PlusButton onClick={showCreateBookModal} />
      </div>

      <ul className="mt-1 space-y-2">
        {physicalBooks.map((book) => (
          <li key={book.id} className="items-center rounded-md bg-gray-100 even:bg-gray-200">
            <GroupedPhysicalBooksItem searchQuery={searchQuery} physicalBook={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhysicalBooksArea;
