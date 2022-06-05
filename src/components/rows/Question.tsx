import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Chevron} from '../../theme/shapes';
import SubTitle from '../labels/SubTitle';
import SmallText from '../labels/SmallText';
import {useColors} from '../../theme/ThemeManager';

type Props = {
  title: string;
  tags: Array<string>;
  onPress: Function;
};

const Question = ({title, tags, onPress}: Props) => {
  const {cardBG} = useColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: cardBG,
      }}>
      <View style={{flex: 1}}>
        <SubTitle label={title} />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {<SmallText label={`${tags.join(' | ')}`} />}
        </View>
      </View>
      <View style={{paddingLeft: 10}}>
        <Chevron />
      </View>
    </TouchableOpacity>
  );
};

export default Question;
