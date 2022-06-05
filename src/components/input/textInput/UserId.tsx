import React from 'react';
import TextInput from './';

type Props = {
  onSubmit: Function;
};

const UserId = ({onSubmit}: Props) => {
  return (
    <TextInput
      placeholder="Enter User ID"
      keyboardType="numeric"
      returnKeyType="done"
      onSubmitEditing={onSubmit}
    />
  );
};

export default UserId;
