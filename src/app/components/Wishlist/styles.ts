import { StyleSheet } from 'react-native';
import { blue, white } from '@constants/colors';

export default StyleSheet.create({
  wishlist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
  },
  wishlistMessage: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: blue
  },
  wishlistMessageDecoration: {
    marginBottom: 12,
    fontSize: 28,
    lineHeight: 32
  }
});
