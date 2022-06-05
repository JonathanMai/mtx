import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import {useColors} from '../../theme/ThemeManager';

type Props = {
  small?: boolean;
};

const ActivityIndicator = ({small = false}: Props) => {
  const {activityIndicator} = useColors();
  return (
    <RNActivityIndicator
      color={activityIndicator}
      size={small ? 'small' : 'large'}
    />
  );
};

export default ActivityIndicator;
