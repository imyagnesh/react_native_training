import React, {useRef} from 'react';
import {View, Text, TextInput as RNTextInput} from 'react-native';
import styles from './styles';

const TextInput = ({
  field: {name, value, onChange, onBlur},
  form: {touched, errors, setFieldTouched}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  ...props
}) => {
  const textInputRef = useRef();

  const onFocus = () => {
    if (!(touched[name] && !!errors[name])) {
      textInputRef.current.setNativeProps({style: styles.textInputFocus});
    }
  };

  const inputOnBlur = e => {
    if (!(touched[name] && !!errors[name])) {
      textInputRef.current.setNativeProps({style: styles.textInput});
    }
    onBlur(name)(e);
  };

  return (
    <View style={styles.textInputWrapper}>
      <RNTextInput
        ref={textInputRef}
        style={[
          styles.textInput,
          touched[name] && !!errors[name] && styles.textInputError,
        ]}
        name={name}
        value={value}
        onChangeText={onChange(name)}
        onBlur={inputOnBlur}
        onFocus={onFocus}
        {...props}
      />
      {touched[name] && !!errors[name] && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default TextInput;
