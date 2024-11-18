import React from 'react';
import MiddleNavItem from './MiddleNavItem';
import middleNavIcons from '../helper/navIcons';

const MiddleNavItems = () => {
  return (
    <div className='flex justify-center h-full gap-2 items-center '>
      {middleNavIcons.map(icon => (
        <MiddleNavItem key={icon.id} icon={icon.element} path={icon.path} />
      ))}
    </div>
  );
};

export default MiddleNavItems;
