import LeftNav from './Left Nav/LeftNav';
import MiddleNav from './Middle Nav/MiddleNav';
import RightNav from './Reight Nav/RightNav';

const NavItems = () => {
  return (
    <div className='flex justify-between items-center border-b-[1px] border-[text-accent]  px-[20px]'>
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </div>
  );
};

export default NavItems;
