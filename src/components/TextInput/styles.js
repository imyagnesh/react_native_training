import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputWrapper: {
    margin: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    fontSize: 18,
    fontWeight: '500',
    color: '#2d2d2d',
  },
  textInputFocus: {
    borderColor: 'blue',
  },
  textInputError: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'red',
    paddingVertical: 4,
  },
});

export default styles;
