import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import logoutIcon from '@assets/ic_logout.png';
import { SQUARE_NARROW } from '@constants/styleHelpers';
import authActions from '@redux/auth/actions';

function LogoutButton() {
  const dispatch = useDispatch();
  const logOut = () => dispatch(authActions.logOut());
  return (
    <TouchableOpacity onPress={logOut}>
      <Image style={SQUARE_NARROW} source={logoutIcon} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
