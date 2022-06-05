import React from 'react';

import TextButton from './';
import {useColors} from '../../../theme/ThemeManager';

type Props = {
  label: string;
  onPress: Function;
  highlight: boolean;
};

const HighlightLabel = ({label, onPress, highlight}: Props) => {
  const {cardBG} = useColors();

  return (
    <TextButton
      style={{backgroundColor: highlight ? cardBG : 'transparent'}}
      label={label}
      onPress={onPress}
    />
  );
};

export default HighlightLabel;
