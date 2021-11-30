import React from 'react';
import { useDebounce } from 'use-debounce';

import AbstractBooksArea from './areas/AbstractBooksArea';

function BooksPage() {
  const [booksSearch, setBooksSearch] = React.useState('');

  const [debouncedBooksSearch] = useDebounce(booksSearch, 600);

  function onBooksSearchChange({ target: { value } }) {
    setBooksSearch(value);
  }

  return (
    <div className="h-full flex flex-col">
      <div className="py-2 flex justify-center">
        <input
          className="w-2/3 px-2 py-1 text-base border-b-2 border-gray-300 focus:outline-none focus:border-gray-400"
          type="text"
          value={booksSearch}
          onChange={onBooksSearchChange}
          placeholder="Введите название книги"
        />
      </div>

      <div className="h-full flex flex-grow">
        <div className="h-full w-1/2 bg-gray-50">
          <AbstractBooksArea searchQuery={debouncedBooksSearch} />
        </div>

        <div className="h-full w-1/2"></div>
      </div>
    </div>
  );
}

export default BooksPage;
