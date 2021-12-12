import React from 'react';
import { useQuery } from '@apollo/client';

// gql
import { GET_GROUPED_PHYSICAL_BOOKS } from '~/graphql-client/queries/physical-books.queries';

import GroupedPhysicalBooksItem from '../widgets/GroupedPhysicalBooksItem';

// utils
import { getLocaleStringDate } from '~/utils/time.utils';

// icons
import plusIcon from '~/icons/plus.svg';

function PhysicalBooksArea({ searchQuery }) {
  const { loading, error, data } = useQuery(GET_GROUPED_PHYSICAL_BOOKS, {
    variables: { searchQuery },
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
        <button className="p-1 rounded-md bg-green-200 hover:bg-green-300" type="button">
          <img width="18" height="18" src={plusIcon} alt="plus" />
        </button>
      </div>

      <ul className="mt-1 space-y-2">
        {physicalBooks.map((book) => (
          <li key={book.id} className="items-center rounded-md bg-gray-100 even:bg-gray-200">
            <GroupedPhysicalBooksItem physicalBook={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhysicalBooksArea;
