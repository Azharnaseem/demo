import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import CardView from '../screens/CardsScreen';

const Stack = createStackNavigator();
export default function Routes() {
  const isLogin = useSelector((state) => state.Auth.isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardView" headerMode="none">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CardView" component={CardView} />
      </Stack.Navigator>
      {/* <Loader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      )} */}
    </NavigationContainer>
  );
}
