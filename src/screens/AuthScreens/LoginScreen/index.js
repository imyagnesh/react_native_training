import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View} from 'react-native';
import Form from '../../../components/Form';
import {fields, initialValues} from './fields';

const LoginScreen = ({navigation: {goBack}}) => {
  const onSubmit = async values => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(values));
      goBack();
    } catch (error) {}
  };

  return (
    <View>
      <Form
        fields={fields}
        btnText="Login"
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default LoginScreen;
