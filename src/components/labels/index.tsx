import React from 'react';
import {Text} from 'react-native';

type Props = {
  label: string;
  fontSize?: number;
  color: string;
  style: object;
};

export default ({label, fontSize = 15, color, style}: Props) => {
  return <Text style={[{color, fontSize}, style]}>{label}</Text>;
};
