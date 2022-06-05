import {TouchableOpacity} from 'react-native';
import React from 'react';
import TextLabel from '../../labels/Text';

type Props = {
  label: string;
  onPress: Function;
  style?: Object;
};

const Text = ({label, onPress, style = {}}: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          padding: 5,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 8,
          overflow: 'hidden',
        },
        style,
      ]}
      onPress={onPress}>
      <TextLabel label={label} />
    </TouchableOpacity>
  );
};

export default Text;
