import React, {useState} from 'react';
import {ActionSheetIOS} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import actions from './actions';

const ImagePicker = ({children}) => {
  const [response, setResponse] = useState();

  const openActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...actions.map(x => x.title)],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        }
        const action = actions[buttonIndex + 1];
        if (action.type === 'capture') {
          launchCamera(action.options, setResponse);
        }
        if (action.type === 'library') {
          launchImageLibrary(action.options, setResponse);
        }
      },
    );
  };
  return (
    <BorderlessButton onPress={openActionSheet}>{children}</BorderlessButton>
  );
};

export default ImagePicker;
