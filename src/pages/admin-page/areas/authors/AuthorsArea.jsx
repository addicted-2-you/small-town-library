import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';

// graphql
import { GET_AUTHORS } from '~/graphql-client/authors';
import { DELETE_AUTHOR } from '~/graphql-client/mutations/authors.mutations';

import Modal from '~/components/Modal';

import AuthorModal from './AuthorModal';

// icons
import plusIcon from '~/icons/plus.svg';
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';

function AuthorsArea() {
  const [isCreateAuthorModalVisible, setIsCreateAuthorModalVisible] = React.useState(false);

  const { loading, error, data: authorsData } = useQuery(GET_AUTHORS);

  const [deleteAuthorMutation] = useMutation(DELETE_AUTHOR, {
    update(proxy, { data: { deleteAuthor } }) {
      const data = proxy.readQuery({
        query: GET_AUTHORS,
      });

      proxy.writeQuery({
        query: GET_AUTHORS,
        data: {
          authors: data.authors.filter((author) => author.id !== deleteAuthor.id),
        },
      });
    },
  });

  const closeCreateAuthorModal = React.useCallback(() => setIsCreateAuthorModalVisible(false), []);

  const deleteAuthorHandler = React.useCallback((authorId) => {
    deleteAuthorMutation({ variables: { authorId } });
  }, []);

  const { url } = useRouteMatch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { getAuthors: authors } = authorsData;

  return (
    <>
      <button
        type="button"
        className="p-1 rounded-md bg-green-200 hover:bg-green-300"
        onClick={() => setIsCreateAuthorModalVisible(true)}
      >
        <img width="18" height="18" src={plusIcon} alt="plus" />
      </button>

      <ul className="py-2 space-y-2">
        {authors.map((author) => (
          <li
            key={author.id}
            className="py-1 px-2 flex justify-between items-center rounded-md bg-gray-100 even:bg-gray-200"
          >
            <a href={`${url}/${author.id}`} className="hover:text-blue-500 hover:underline">
              {`${author.name} ${author.patronum || ''} ${author.surname || ''}`}
            </a>

            <span className="space-x-2">
              <button type="button" className="p-1 rounded-md bg-yellow-200 hover:bg-yellow-300">
                <img width="18" height="18" src={editIcon} alt="edit" />
              </button>

              <button
                type="button"
                className="p-1 rounded-md bg-red-200 hover:bg-red-300"
                onClick={() => deleteAuthorHandler(author.id)}
              >
                <img width="18" height="18" src={trashIcon} alt="delete" />
              </button>
            </span>
          </li>
        ))}
      </ul>

      {/* Create Author Modal */}
      <Modal isVisible={isCreateAuthorModalVisible} close={closeCreateAuthorModal}>
        <AuthorModal close={closeCreateAuthorModal} />
      </Modal>
    </>
  );
}

export default AuthorsArea;
