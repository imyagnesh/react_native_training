import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Form from '../../../components/Form';
import {fields, initialValues} from './fields';

const LoginScreen = ({navigation: {goBack}, loginRequest}) => {
  return (
    <View>
      <Form
        fields={fields}
        btnText="Login"
        initialValues={initialValues}
        onSubmit={loginRequest}
      />
    </View>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  loginRequest: (value, meta) => dispatch({type: 'LOGIN_REQUEST', value, meta}),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
