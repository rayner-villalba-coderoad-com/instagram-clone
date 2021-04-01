import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Router from './router';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/* Tab navigator contains safeareaview */}
      <Router />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
