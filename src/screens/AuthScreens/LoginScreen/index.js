import React from 'react';
import {View} from 'react-native';
import {setGenericPassword} from 'react-native-keychain';
import Form from '../../../components/Form';
import {fields, initialValues} from './fields';

const LoginScreen = ({navigation: {goBack}}) => {
  const onSubmit = async ({username, password}) => {
    try {
      await setGenericPassword(username, password);
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
