import React from 'react';
import { NavLink } from 'react-router-dom';

function CandybarLink(props) {
  const { children, link } = props;

  return (
    <li className="w-full cursor-pointer rounded-md hover:bg-purple-400">
      <NavLink
        className="py-1 px-2 h-full w-full flex justify-start items-center rounded-md"
        activeClassName="bg-purple-100"
        to={link}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CandybarLink;
