import React from 'react';
import MiddleNavItem from './MiddleNavItem';
import middleNavIcons from '../helper/navIcons';

const MiddleNavItems = () => {
  return (
    <div className='flex justify-center items-center gap-[21px]'>
      {middleNavIcons.map(icon => (
        <MiddleNavItem key={icon.id} icon={icon.element} />
      ))}
    </div>
  );
};

export default MiddleNavItems;
