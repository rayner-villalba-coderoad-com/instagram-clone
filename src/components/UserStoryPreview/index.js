import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfilePicture from './../ProfilePicture';

const Story = (props) => {
  const navigation = useNavigation();
  const {
    story: {
      user: {
        id,
        imageUri,
        name
      }
    } 
  } = props;
  const onPress = () => {
    navigation.navigate('Story', { userId: id });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={imageUri} /> 
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;