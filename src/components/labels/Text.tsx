import React from 'react';
import Label from './';
import {useColors} from '../../theme/ThemeManager';
import {LabelsProps} from './interface';

const Text = ({label, style = {}}: LabelsProps) => {
  const {title} = useColors();

  return <Label label={label} color={title} style={style} />;
};

export default Text;
