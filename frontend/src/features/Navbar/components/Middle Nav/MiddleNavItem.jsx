import React from 'react';
import { NavLink } from 'react-router-dom';

const MiddleNavItem = ({ icon, path }) => {
  return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-[30px] py-[20px] ${
            isActive ? `hover:bg-none border-blue-400` : ``
          }`
        }
      >
        {icon}
      </NavLink>
  );
};

export default MiddleNavItem;
