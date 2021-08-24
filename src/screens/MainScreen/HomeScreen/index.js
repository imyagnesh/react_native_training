import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {getGenericPassword} from 'react-native-keychain';
import {useState} from 'react';
import {connect} from 'react-redux';
import {loadProducts} from '../../../actions/productsAction';
import FastImage from 'react-native-fast-image';
import useOriantation from '../../../hooks/useOriantation';

const HomeScreen = ({
  navigation: {navigate},
  user,
  products,
  loadProductsRequest,
}) => {
  const isFocused = useIsFocused();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {oriantation} = useOriantation();
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadProductsRequest(1);
  }, [loadProductsRequest]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const credentials = await getGenericPassword();
        if (credentials) {
          console.log(
            'Credentials successfully loaded for user ' + credentials.username,
          );
          setIsAuthenticated(true);
        } else {
          console.log('No credentials stored');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    };
    getUser();
  }, [isFocused]);

  if (oriantation.screenWidth <= 0) {
    return null;
  }

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 10,
          height: 100,
        }}>
        <FastImage
          source={{
            uri: item.thumbnailUrl,
          }}
          resizeMode="contain"
          style={{
            width: 100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };

  const onEndReached = ({distanceFromEnd}) => {
    setPage(value => {
      loadProductsRequest(value + 1);
      return value + 1;
    });
  };

  return (
    <View style={{flex: 1}}>
      {oriantation.isPortrait ? (
        <FlatList
          key="_"
          keyExtractor={item => `_${item.id}`}
          data={products.data}
          renderItem={renderItem}
          numColumns={1}
          onEndReached={onEndReached}
          ListFooterComponent={() => {
            if (products.loading) {
              return <ActivityIndicator color="red" size="large" />;
            }
            return null;
          }}
        />
      ) : (
        <FlatList
          key="#"
          keyExtractor={item => `#${item.id}`}
          data={products.data}
          renderItem={renderItem}
          numColumns={2}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProductsRequest: page => loadProducts(page)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
