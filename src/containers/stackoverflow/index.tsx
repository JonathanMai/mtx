import React, {useState} from 'react';
import {View} from 'react-native';

import UserId from '../../components/input/textInput/UserId';
import {get} from '../../api';
import {getUser} from '../../api/urls';
import Avatar from '../../components/avatar';
import ActivityIndicator from '../../components/activityIndicator';
import Title from '../../components/labels/Title';
import StackoverflowList from '../../components/list/Stackoverflow';
import Filters from './Filters';

const StackOverflow = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [data, setData] = useState<Array<Object>>([]);
  const onSubmit = async ({nativeEvent: {text}}) => {
    setSearched(true);
    setLoading(true);
    const resp = await get(getUser.replace('[ID]', text));
    sortData(resp.items, 'creation_date');
    setLoading(false);
  };

  const sortData = (data, sortBy) =>
    setData([...data.sort((a, b) => b[sortBy] - a[sortBy])]);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 30}}>
        <UserId onSubmit={onSubmit} />
      </View>
      {searched &&
        (loading ? (
          <ActivityIndicator />
        ) : data?.length > 0 ? (
          <>
            <View style={{marginBottom: 10}}>
              <Avatar
                name={data[0].owner.display_name}
                imageUrl={data[0].owner.profile_image}
                reputation={data[0].owner.reputation}
              />
            </View>
            <Filters onPress={sortBy => sortData(data, sortBy)} />
            <View style={{flex: 1}}>
              <StackoverflowList data={data} />
            </View>
          </>
        ) : (
          <View style={{alignSelf: 'center'}}>
            <Title label="No Data was Found" />
          </View>
        ))}
    </View>
  );
};

export default StackOverflow;
