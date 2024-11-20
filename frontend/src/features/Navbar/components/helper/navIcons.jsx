import { FaHome, FaUserFriends } from 'react-icons/fa';
import iconStyle from './navIconStyle';

const middleNavIcons = [
  { id: 1, path: '/', element: <FaHome className={iconStyle} /> },
  { id: 2, path: '/friends', element: <FaUserFriends className={iconStyle} /> },
];

export default middleNavIcons;
