
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/redux/store.js';
import LoginScreen from './src/components/LoginScreen.js';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router.js';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const state = useSelector(state => state.fruit)
  return (
    <>
      {(!state.isLoggedIn && !state.adminLoggedIn) && <LoginScreen></LoginScreen>}
      {(state.isLoggedIn || state.adminLoggedIn) && <Router />}
    </>
  )
}

export default function Fruit() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
