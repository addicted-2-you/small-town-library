import React from 'react';

function BooksTable(props) {
  const { books } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Publishing Date</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.author_id}</td>
            <td>{book.publisher_id}</td>
            <td>{book.publishing_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
