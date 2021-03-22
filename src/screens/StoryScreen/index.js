import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import storiesData from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);  
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  useEffect(() => {
    
    const userStories = storiesData.find(storyData => storyData.user.id === userId);
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);
  //NOTE we can use two useEffect
  // useEffect(() => {
  //   if (!userStories) {
  //     return;
  //   }
  //   if (activeStoryIndex < 0) {
  //     setActiveStoryIndex(0);
  //     return;
  //   }
  //   if (activeStoryIndex >= userStories.stories.length) {
  //     setActiveStoryIndex(userStories.stories.length - 1);
  //   }
  // }, [activeStoryIndex]);
  const navigateToNextUser = () => {
    navigation.push('Story', { userId: (parseInt(userId) + 1).toString() });
  };
  
  const navigateToPrevUser = () => {
    navigation.push('Story', { userId: (parseInt(userId) - 1).toString() });
  };
  
  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length -1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }; 

  const handlePress = (event) => {
    const x = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };
  
  if (!userStories) {
    return (
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>    
      );   
  }
  const activeStory = userStories.stories[activeStoryIndex];
  //console.log('rendering');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
      <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>
        <View style={styles.userInfo}>
          <ProfilePicture uri={userStories.user.imageUri} size={50} />
          <Text style={styles.userName}>{userStories.user.name}</Text>  
          <Text style={styles.postedTime}>{activeStory.postedTime}</Text>  
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.cameraButton}>
            <Feather name="camera" size={30} color={'#fff'} />
          </View>
          
          <View style={styles.textInputContainer}>
            <TextInput 
              style={styles.textInput} 
              editable
              placeholder="Send Message"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.messageButton}>
            <IoniconsIcon name="paper-plane-outline" size={35} color={"#fff"} />
          </View>
          
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>    
  );
};

export default StoryScreen;
