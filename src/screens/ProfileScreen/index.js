import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ProfileScreen = () => (
  <SafeAreaView>
    <View style={{backgroundColor: 'yellow', height: 1000}}>
      <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>Profile</Text>
    </View> 
  </SafeAreaView>    
);

export default ProfileScreen;