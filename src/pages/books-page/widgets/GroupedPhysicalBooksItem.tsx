import React from 'react';

import { IGroupedPhysicalBook } from '~/models/physical-book.model';

import PhysicalBooksGroupList from './PhysicalBooksGroupList';

// icons
import chevronRightSolid from '~/icons/chevron-right-solid.svg';

interface IGroupedPhysicalBooksItemProps {
  physicalBook: IGroupedPhysicalBook;
}

function GroupedPhysicalBooksItem(props: IGroupedPhysicalBooksItemProps) {
  const { physicalBook } = props;

  const [listOpened, setListOpened] = React.useState(true);

  return (
    <div>
      <button
        className="py-1 px-2 w-full flex items-center"
        type="button"
        onClick={() => setListOpened(!listOpened)}
      >
        <img
          className={`mr-2 transform ${listOpened ? 'rotate-90' : ''}`}
          height="8"
          width="8"
          src={chevronRightSolid}
          alt="chevron right"
        />

        <span className="flex justify-between flex-grow">
          <span>
            {physicalBook.name} - {physicalBook.publishingDate}
          </span>

          <span>({physicalBook.count})</span>
        </span>
      </button>

      {listOpened ? (
        <PhysicalBooksGroupList
          name={physicalBook.name}
          publishingDate={physicalBook.publishingDate}
        />
      ) : null}
    </div>
  );
}

export default React.memo(
  GroupedPhysicalBooksItem,
  (prevProps, nextProps) =>
    prevProps.physicalBook.name === nextProps.physicalBook.name &&
    prevProps.physicalBook.publishingDate === nextProps.physicalBook.publishingDate &&
    prevProps.physicalBook.count === nextProps.physicalBook.count,
);
