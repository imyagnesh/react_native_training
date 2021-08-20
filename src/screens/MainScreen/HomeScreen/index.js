import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {View, Button} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation: {navigate}}) => {
  const isFocused = useIsFocused();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await AsyncStorage.getItem('@storage_Key');
        if (res) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {}
    };
    getUser();
  }, [isFocused]);

  return (
    <View>
      {!isAuthenticated && (
        <>
          <Button title="Login" onPress={() => navigate('Login')} />
          <Button title="Register" onPress={() => navigate('Register')} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
