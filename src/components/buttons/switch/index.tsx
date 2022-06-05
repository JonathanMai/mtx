import {View, Text, Switch as RNSwitch} from 'react-native';
import React from 'react';
import {useColors} from '../../../theme/ThemeManager';
import {directionOptions} from '../../../constants/styleOptions';

type Props = {
  label?: string;
  enabled: boolean;
  toggleSwitch: Function;
  direction?: directionOptions;
};

const Switch = ({
  label = '',
  enabled,
  toggleSwitch,
  direction = 'top',
}: Props) => {
  const {title, switchColors} = useColors();

  return (
    <View style={{alignItems: 'center', flexDirection: styleIndex[direction]}}>
      <RNSwitch
        trackColor={{false: switchColors.trackOff, true: switchColors.trackOn}}
        thumbColor={enabled ? switchColors.thumbOn : switchColors.thumbOff}
        ios_backgroundColor={
          enabled ? switchColors.trackOff : switchColors.trackOn
        }
        onValueChange={toggleSwitch}
        value={enabled}
      />
      <Text style={{color: title}}>{label}</Text>
    </View>
  );
};

// Holds the options index for switch.
const styleIndex = {
  top: 'column-reverse',
  right: 'row',
  left: 'row-reverse',
  bottom: 'column',
};
export default Switch;
