import React from 'react';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <section className='w-full py-[10px] px-[20px] border-b-[2px] border-[text-accent]'>
      <NavItems />
    </section>
  );
};

export default Navbar;
