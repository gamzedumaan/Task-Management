import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/Fontisto';

import Home from './src/components/Home/Home';
import Projects from './src/components/Projects/Projects';
import Calender from './src/components/Calender/Calender';
import Chats from './src/components/Chats/Chats';
import Profile from './src/components/Profile/Profile';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Zoom from './src/components/Home/Zoom';
import LogIn from './src/components/Home/LogIn';
import SignUp from './src/components/Home/SignUp';
import MyProfile from './src/components/Home/MyProfile';

const Tab = createBottomTabNavigator();

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyStackSignUp() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Zoom" component={Zoom} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyProfile" component={MyProfile} />

    </Stack.Navigator>
  );
}

function MyStackProfile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
    </Stack.Navigator>
  );
}

function MyStackJoin() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Zoom" component={Zoom} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Zoom" component={Zoom} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="MyProfile" component={MyStackProfile} />
    </Stack.Navigator>
  );
}
export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: 'Test',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarIcon: () => <Icon name="home" size={24} color="white" />,
            tabBarShowLabel: focused => (
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? Colors.primary : 'white',
                }}>
                Home
              </Text>
            ),
          }}
        />

        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            tabBarIcon: () => <Icon2 name="project" size={24} color="white" />,
            tabBarShowLabel: focused => (
              <Text>
                style{{fontSize: 10, color: focused ? Colors.primary : 'white'}}
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarIcon: () => <Icon3 name="calendar" size={24} color="white" />,
            tabBarShowLabel: focused => (
              <Text>
                style{{fontSize: 10, color: focused ? Colors.primary : 'white'}}
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarIcon: () => (
              <Icon4
                name="ios-chatbox-ellipses-sharp"
                size={24}
                color="white"
              />
            ),
            tabBarShowLabel: focused => (
              <Text>
                style{{fontSize: 10, color: focused ? Colors.primary : 'white'}}
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Icon5 name="persons" size={23} color="white" />,
            tabBarShowLabel: focused => (
              <Text>
                style{{fontSize: 10, color: focused ? Colors.primary : 'white'}}
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
