import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View} from 'react-native';

const MainStack = createNativeStackNavigator();

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={() => <View>Loading....</View>}
      onReady={() => {
        const isFirstTime = false;
        if (isFirstTime) {
          navigationRef.navigate('Intro');
        } else {
          navigationRef.resetRoot({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }
      }}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Intro"
          getComponent={() => require('./src/screens/IntroScreen').default}
        />
        <MainStack.Group screenOptions={{presentation: 'modal',  }}>
          <MainStack.Screen
            name="Login"
            getComponent={() =>
              require('./src/screens/AuthScreens/LoginScreen').default
            }
          />
          <MainStack.Screen
            name="Register"
            getComponent={() =>
              require('./src/screens/AuthScreens/RegisterScreen').default
            }
          />
          <MainStack.Screen
            name="ForgotPassword"
            getComponent={() =>
              require('./src/screens/AuthScreens/ForgotPasswordScreen').default
            }
          />
          <MainStack.Screen
            name="Cart"
            getComponent={() => require('./src/screens/CartScreen').default}
          />
        </MainStack.Group>
        <MainStack.Screen
          name="Main"
          getComponent={() => require('./src/screens/MainScreen').default}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
