import React, {useState} from 'react';
import {
  BorderlessButton,
  RectButton,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import actions from './actions';
import {Text, View, PermissionsAndroid} from 'react-native';

const ModalHoc = gestureHandlerRootHOC(function GestureExample({
  onResponse,
  toggleModal,
}) {
  return (
    <View style={{backgroundColor: '#fff', paddingVertical: 10}}>
      {actions.map(x => {
        return (
          <RectButton
            style={{
              padding: 8,
            }}
            onPress={async () => {
              if (x.type === 'capture') {
                const camaraPermission = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: 'Cool Photo App Camera Permission',
                    message:
                      'Cool Photo App needs access to your camera ' +
                      'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },
                );

                const writeExternalPermission =
                  await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                      title: 'Cool Photo App Camera Permission',
                      message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                      buttonNeutral: 'Ask Me Later',
                      buttonNegative: 'Cancel',
                      buttonPositive: 'OK',
                    },
                  );
                if (
                  camaraPermission === PermissionsAndroid.RESULTS.GRANTED &&
                  writeExternalPermission === PermissionsAndroid.RESULTS.GRANTED
                ) {
                  launchCamera(x.options, onResponse);
                } else {
                  alert('Camera permission denied');
                }
              }
              if (x.type === 'library') {
                launchImageLibrary(x.options, onResponse);
              }
              toggleModal();
            }}>
            <View key={x.title}>
              <Text>{x.title}</Text>
            </View>
          </RectButton>
        );
      })}
    </View>
  );
});

const ImagePicker = ({children, onResponse}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal isVisible={isOpen}>
        <ModalHoc onResponse={onResponse} toggleModal={toggleModal} />
      </Modal>
      <BorderlessButton onPress={toggleModal}>{children}</BorderlessButton>
    </>
  );
};

export default ImagePicker;
