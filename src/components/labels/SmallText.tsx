import React from 'react';
import Label from './';
import {useColors} from '../../theme/ThemeManager';
import {LabelsProps} from './interface';

const SmallText = ({label, style = {}}: LabelsProps) => {
  const {title} = useColors();
  return <Label label={label} color={title} fontSize={12} style={style} />;
};

export default SmallText;
