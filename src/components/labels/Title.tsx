import React from 'react';
import Labels from './';
import {useColors} from '../../theme/ThemeManager';
import {LabelsProps} from './interface';

const Title = ({label, style = {}}: LabelsProps) => {
  const {title} = useColors();

  return (
    <Labels
      label={label}
      color={title}
      fontSize={20}
      style={[{fontWeight: 'bold'}, style]}
    />
  );
};

export default Title;
