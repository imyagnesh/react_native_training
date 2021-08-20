import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ImagePicker from '../../../components/ImagePicker';
import FastImage from 'react-native-fast-image';
import {BorderlessButton} from 'react-native-gesture-handler';
import Video from 'react-native-video';

const SettingsScreen = () => {
  const [response, setResponse] = useState();

  console.warn(response);

  return (
    <View>
      <ImagePicker onResponse={setResponse}>
        {response && response.assets && response.assets.length > 0 ? (
          <>
            {response.assets.map(x => {
              return (
                <View
                  style={{
                    margin: 20,
                  }}>
                  {!!x.type ? (
                    <FastImage
                      source={{
                        uri: x.uri,
                      }}
                      resizeMode="cover"
                      style={{
                        height: 100,
                        width: 100,
                      }}
                    />
                  ) : (
                    <Video
                      source={{uri: x.uri}} // Can be a URL or a local file.
                      // onBuffer={this.onBuffer} // Callback when remote video is buffering
                      // onError={this.videoError} // Callback when video cannot be loaded
                      style={{
                        height: 300,
                        width: 300,
                      }}
                    />
                  )}
                  <BorderlessButton
                    onPress={() => setResponse(null)}
                    style={{
                      position: 'absolute',
                      left: 100 - 12,
                      top: 0 - 12,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        height: 24,
                        width: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
                      }}>
                      <Text>X</Text>
                    </View>
                  </BorderlessButton>
                </View>
              );
            })}
          </>
        ) : (
          <Text>Select Image</Text>
        )}
      </ImagePicker>
    </View>
  );
};

export default SettingsScreen;
