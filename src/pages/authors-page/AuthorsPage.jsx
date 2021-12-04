import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// graphql
import { GET_AUTHORS } from '~/graphql-client/authors';

// hooks
import { useAuthorDelete } from '~/hooks/authors/useAuthorDelete';
import { useModal } from '~/components/modal/useModal';

// modals
import AuthorModal from '~/modals/AuthorModal';

// utils
import { sanitizeUrl } from '~/utils/string.utils';

// icons
import plusIcon from '~/icons/plus.svg';
import trashIcon from '~/icons/trash.svg';

function AuthorsPage() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  const { url } = useRouteMatch();

  const { showModal: showCreateAuthorModal } = useModal({
    ModalContent: AuthorModal,
    inputs: [],
    title: 'Добавить автора',
  });

  const deleteAuthorMutation = useAuthorDelete();

  const sanitizedUrl = React.useMemo(() => sanitizeUrl(url), [url]);

  const deleteAuthorHandler = React.useCallback((authorId) => {
    deleteAuthorMutation({ variables: { authorId } });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { getAuthors: authors } = data;

  return (
    <>
      <button
        className="p-1 rounded-md bg-green-200 hover:bg-green-300"
        type="button"
        onClick={showCreateAuthorModal}
      >
        <img width="18" height="18" src={plusIcon} alt="plus" />
      </button>

      <ul className="py-2 space-y-2">
        {authors.map((author) => (
          <li
            key={author.id}
            className="py-1 px-2 flex justify-between items-center rounded-md bg-gray-100 even:bg-gray-200"
          >
            <a
              href={`${sanitizedUrl}/${author.id}`}
              className="hover:text-blue-500 hover:underline"
            >
              {`${author.name} ${author.patronum || ''} ${author.surname || ''}`}
            </a>

            <span className="space-x-2">
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
    </>
  );
}

export default AuthorsPage;
