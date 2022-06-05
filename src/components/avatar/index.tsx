import {View, Image} from 'react-native';
import React from 'react';
import {useColors} from '../../theme/ThemeManager';
import SubTitle from '../labels/SubTitle';

export type AvatarProps = {
  name: string;
  imageUrl: string;
  reputation: string;
};

const Avatar = ({name, imageUrl, reputation}: AvatarProps) => {
  const {avatarBorder, cardBG} = useColors();

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 30,
        alignSelf: 'center',
        backgroundColor: cardBG,
        borderRadius: 15,
      }}>
      <Image
        style={{
          height: 100,
          width: 100,
          borderWidth: 2,
          borderColor: avatarBorder,
          borderRadius: 8,
          marginRight: 20,
        }}
        source={{uri: imageUrl}}
      />
      <View style={{justifyContent: 'space-between'}}>
        <SubTitle label={name} />
        <View>
          <SubTitle label={'Reputation:'} />
          <SubTitle label={reputation} />
        </View>
      </View>
    </View>
  );
};

export default Avatar;
