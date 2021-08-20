import React from 'react';
import Form from '../../../components/Form';
import {fields, initialValues} from './fields';

const RegisterScreen = () => {
  const onSubmit = () => {};
  return (
    <Form
      fields={fields}
      btnText="Register"
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterScreen;
