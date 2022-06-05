import React from 'react';
import {View} from 'react-native';
import {useColors} from './ThemeManager';

export const Chevron = () => {
  const {title} = useColors();
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: title,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        height: 15,
        width: 15,
        marginRight:5,
        transform: [{rotate: '-45 deg'}],
      }}
    />
  );
};
