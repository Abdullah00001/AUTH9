import { FaHome, FaUserFriends } from 'react-icons/fa';
import iconStyle from './navIconStyle';

const middleNavIcons = [
  { id: 1, element: <FaHome className={iconStyle} /> },
  { id: 2, element: <FaUserFriends className={iconStyle} /> },
];

export default middleNavIcons;
