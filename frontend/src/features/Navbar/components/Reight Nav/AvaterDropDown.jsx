import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const AvaterDropDown = () => {
  return (
    <div className='absolute bg-secondary w-[300px] p-[15px] border-none rounded-[12px]  right-[2px] top-[36px]'>
      <NavLink to={'/profile'} className='text-[17px] font-bold'>
        Abdullah Bin Omar Chowdhury
      </NavLink>
      <hr className='mt-4' />
      <ul className='flex flex-col gap-4 mt-2'>
        <li className='font-medium'>
          <NavLink to={'/settings'}>Settings</NavLink>
        </li>
        <Logout/>
      </ul>
    </div>
  );
};

export default AvaterDropDown;
