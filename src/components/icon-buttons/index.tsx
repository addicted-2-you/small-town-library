import React from 'react';

// icons
import plusIcon from '~/icons/plus.svg';
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';

interface IIconButtonProps {
  onClick(e: React.MouseEvent): void;
}

export function PlusButton(props: IIconButtonProps) {
  const { onClick } = props;

  return (
    <button
      className="p-1 rounded-md bg-green-200 hover:bg-green-300"
      type="button"
      onClick={onClick}
    >
      <img width="18" height="18" src={plusIcon} alt="plus" />
    </button>
  );
}

export function EditButton(props: IIconButtonProps) {
  const { onClick } = props;

  return (
    <button
      className="p-1 rounded-md bg-yellow-200 hover:bg-yellow-300"
      type="button"
      onClick={onClick}
    >
      <img width="18" height="18" src={editIcon} alt="plus" />
    </button>
  );
}

export function TrashButton(props: IIconButtonProps) {
  const { onClick } = props;

  return (
    <button className="p-1 rounded-md bg-red-200 hover:bg-red-300" type="button" onClick={onClick}>
      <img width="18" height="18" src={trashIcon} alt="plus" />
    </button>
  );
}
