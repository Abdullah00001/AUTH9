import { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
const RightNavItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className='relative'>
      <div onClick={toggleDropdown} className='cursor-pointer'>
        <RxAvatar className='text-[35px]' />
      </div>
      {isOpen && (
        <div className='absolute bg-secondary w-[300px] p-[15px] border-none rounded-[12px]  right-[2px] top-[36px]'>
            <NavLink className="text-[17px] font-bold">Abdullah Bin Omar Chowdhury</NavLink>
            <hr className='mt-4' />
          <ul className='flex flex-col gap-4 mt-2'>
            <li className='font-medium'><NavLink>Settings</NavLink></li>
            <li className='font-medium'><NavLink>Logout</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RightNavItem;
