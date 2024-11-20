import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <NavLink to={'/'} className='text-[30px] font-bold'>
        PostBook
      </NavLink>
    </div>
  );
};

export default Logo;
