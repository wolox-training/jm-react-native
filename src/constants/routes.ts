import { ImageSourcePropType } from 'react-native';

import libraryIcon from '@assets/ic_library.png';
import libraryIconActive from '@assets/ic_library_active.png';
import wishlistIcon from '@assets/ic_wishlist.png';
import wishlistIconActive from '@assets/ic_wishlist_active.png';

enum Routes {
  Library = 'Library',
  BookList = 'BookList',
  BookDetail = 'BookDetail',
  Wishlist = 'Wishlist',
  Login = 'Login',
  Dashboard = 'Dashboard'
}

type TabBarIcons = {
  [key: string]: { active: ImageSourcePropType; inactive: ImageSourcePropType };
};

export const TabNavigatorIcons: TabBarIcons = {
  [Routes.Library]: {
    active: libraryIconActive,
    inactive: libraryIcon
  },
  [Routes.Wishlist]: {
    active: wishlistIconActive,
    inactive: wishlistIcon
  }
};

export default Routes;
