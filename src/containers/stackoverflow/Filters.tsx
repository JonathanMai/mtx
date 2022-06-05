import {View} from 'react-native';
import React, {useState} from 'react';

import HighlightButton from '../../components/buttons/text/Highlight';
import Text from '../../components/labels/Text';

const Filters = ({onPress}) => {
  const [filteredBy, setFilter] = useState<number>(0);
  const filters = [
    {
      label: 'Created Date',
      _onPress: () => onPressHandler(0, 'creation_date'),
    },
    {
      label: 'Answers',
      _onPress: () => onPressHandler(1, 'answer_count'),
    },
    {
      label: 'Views',
      _onPress: () => onPressHandler(2, 'view_count'),
    },
  ];

  const onPressHandler = (index, sortBy) => {
    setFilter(index);
    onPress(sortBy);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text label={'Sort By'} />

      {filters.map(({label, _onPress}, index) => (
        <HighlightButton
          key={label}
          label={label}
          onPress={_onPress}
          highlight={filteredBy === index}
        />
      ))}
    </View>
  );
};

export default Filters;
