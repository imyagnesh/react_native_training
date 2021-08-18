import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  Pressable,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    height: Platform.OS === 'ios' ? 44 : 42,
    fontSize: 18,
    borderRadius: 10,
  },
});

const App = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.warn(loginForm);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'}>
        <TextInput
          ref={emailRef}
          style={styles.textInput}
          value={loginForm.email}
          nativeID="txtEmail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          onChangeText={text => setLoginForm({...loginForm, email: text})}
        />
        <TextInput
          ref={passwordRef}
          style={styles.textInput}
          value={loginForm.password}
          nativeID="txtPassword"
          secureTextEntry
          returnKeyType="go"
          onChangeText={text => setLoginForm({...loginForm, password: text})}
          onSubmitEditing={onSubmit}
        />
        <Pressable
          android_ripple={{
            color: 'red',
          }}
          onPress={onSubmit}
          style={{
            backgroundColor: 'blue',
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <View style={{borderRadius: 10}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 16,
              }}>
              Login
            </Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
