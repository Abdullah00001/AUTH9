import React from 'react';
import { NavLink } from 'react-router-dom';

const MiddleNavItem = ({ icon, path }) => {
  return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-[30px] py-[20px] ${
            isActive ? `h-full border-b-[3px] rounded-br-[0] rounded-bl-[0] hover:bg-none border-blue-400` : ``
          } h-full flex items-center hover:bg-slate-500 hover:rounded-[6px]`
        }
      >
        {icon}
      </NavLink>
  );
};

export default MiddleNavItem;
