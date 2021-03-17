import React from 'react';
import Feed from '../../components/Feed';
import { SafeAreaView } from 'react-native';
const HomeScreen = () => (
  //Empty <> allow to return multiple components as single component 
  <SafeAreaView>
    <Feed />
  </SafeAreaView>
);

export default HomeScreen;