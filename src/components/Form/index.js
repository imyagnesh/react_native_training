import {Field, Formik} from 'formik';
import React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Form = ({fields, btnText, ...props}) => {
  return (
    <Formik {...props}>
      {({handleSubmit}) => (
        <>
          {fields.map(x => (
            <Field key={x.name} {...x} />
          ))}
          <RectButton onPress={handleSubmit}>
            <View>
              <Text>{btnText}</Text>
            </View>
          </RectButton>
        </>
      )}
    </Formik>
  );
};

export default Form;
