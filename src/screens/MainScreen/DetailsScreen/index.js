import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const DetailsScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={{ flex: 1 }}>
      <FastImage
        source={{
          uri: item.thumbnailUrl,
        }}
        resizeMode="cover"
        style={{
          height: 300,
        }}
      />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
