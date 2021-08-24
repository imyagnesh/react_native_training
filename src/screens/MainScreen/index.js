import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIcon from '../../../assets/icons/home.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        getComponent={() => require('./HomeScreen').default}
      />
      <HomeStack.Screen
        name="DetailsScreen"
        getComponent={() => require('./DetailsScreen').default}
        options={{
          headerTransparent: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

const MainScreen = ({navigation: {navigate}}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon height={size} width={size} fill={color} />;

            case 'Settings':
              return <SettingsIcon height={size} width={size} fill={color} />;

            default:
              return null;
          }
        },
        headerShown: false,
        tabBarAllowFontScaling: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Settings"
        getComponent={() => require('./SettingsScreen').default}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
