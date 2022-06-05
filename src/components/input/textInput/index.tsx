import {TextInput as RNTextInput} from 'react-native';
import React, {useState} from 'react';
import {useColors} from '../../../theme/ThemeManager';

const TextInput = props => {
  const {textInput} = useColors();
  const [val, setVal] = useState<string>('');
  const onChange = text => {
    setVal(text);
    props.onChange && props.onChange(text);
  };

  return (
    <RNTextInput
      style={{
        backgroundColor: textInput.backgroundColor,
        color: textInput.textColor,
        padding: 8,
        borderRadius: 5,
      }}
      value={val}
      onChange={onChange}
      {...props}
    />
  );
};

export default TextInput;
