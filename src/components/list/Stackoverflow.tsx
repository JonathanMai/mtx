import {FlatList} from 'react-native';
import React, {useState} from 'react';
import QuestionModal from '../modals/Question';
import Question from '../rows/Question';

type Props = {
  data: Array<Object>;
};

const Stackoverflow = ({data}: Props) => {
  const [modalURL, setURL] = useState<string>('');
  const keyExtractor = item => item.question_id;
  const renderRow = ({item}) => (
    <Question {...item} onPress={() => setURL(item.link)} />
  );

  return (
    <>
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderRow}
        data={data}
      />
      <QuestionModal modalURL={modalURL} onClose={() => setURL('')} />
    </>
  );
};

export default Stackoverflow;
