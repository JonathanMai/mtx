import React from 'react';
import {View} from 'react-native';
import Title from '../components/labels/Title';
import StackOverflow from '../containers/stackoverflow';

const Main = () => (
  <View style={{flex: 1}}>
    <Title
      label="Get Stackoverflow Posts"
      style={{alignSelf: 'center', marginTop: 20}}
    />
    <StackOverflow />
  </View>
);

export default Main;
