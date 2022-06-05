import React from 'react';
import Labels from '.';
import {useColors} from '../../theme/ThemeManager';
import {LabelsProps} from './interface';

const SubTitle = ({label, style = {}}: LabelsProps) => {
  const {title} = useColors();

  return (
    <Labels
      label={label}
      color={title}
      fontSize={17}
      style={[{fontWeight: 'bold'}, style]}
    />
  );
};

export default SubTitle;
