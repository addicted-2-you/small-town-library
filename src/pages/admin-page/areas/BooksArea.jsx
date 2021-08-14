import React from 'react';

function BooksArea(props) {
  const { books } = props;

  return (
    <>
      <table className="table-auto border-collapse border border-purple-500">
        <thead>
          <tr>
            <th className="px-3 py-0.5 border border-purple-200">Name</th>
            <th className="px-3 py-0.5 border border-purple-200">Author</th>
            <th className="px-3 py-0.5 border border-purple-200">Publisher</th>
            <th className="px-3 py-0.5 border border-purple-200">Publishing Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="px-3 py-0.5 border border-purple-200">{book.name}</td>
              <td className="px-3 py-0.5 border border-purple-200">{book.author_id}</td>
              <td className="px-3 py-0.5 border border-purple-200">{book.publisher_id}</td>
              <td className="px-3 py-0.5 border border-purple-200">
                {new Date(Number(book.publishing_date)).toISOString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BooksArea;
