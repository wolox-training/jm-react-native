import React, { ReactNode } from 'react';

import { TouchableOpacity, Text, ViewStyle, StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

function Button({ children, buttonStyle, buttonTextStyle, ...props }: Props) {
  return (
    <TouchableOpacity {...props} style={buttonStyle}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
