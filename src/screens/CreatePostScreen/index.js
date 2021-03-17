import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const CreatePostScreen = () => (
  <SafeAreaView>
    <View style={{backgroundColor: 'green', height: 1000}}>
      <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>Create Post</Text>
    </View> 
  </SafeAreaView>    
);

export default CreatePostScreen;