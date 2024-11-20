import { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import AvaterDropDown from './AvaterDropDown';
const RightNavItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className='relative'>
      <div onClick={toggleDropdown} className='cursor-pointer h-full'>
        <RxAvatar className='text-[35px]' />
      </div>
      {isOpen && <AvaterDropDown />}
    </div>
  );
};

export default RightNavItem;
