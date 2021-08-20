import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../../assets/icons/home.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';

const Tab = createBottomTabNavigator();

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
      })}>
      <Tab.Screen
        name="Home"
        getComponent={() => require('./HomeScreen').default}
      />
      <Tab.Screen
        name="Settings"
        getComponent={() => require('./SettingsScreen').default}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
