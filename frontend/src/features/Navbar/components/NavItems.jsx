
import LeftNav from './Left Nav/LeftNav';
import MiddleNav from './Middle Nav/MiddleNav';
import RightNav from './Reight Nav/RightNav';

const NavItems = () => {
  return (
    <div className='flex justify-between items-center px-[20px] h-full'>
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </div>
  );
};

export default NavItems;
