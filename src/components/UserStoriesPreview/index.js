import React from 'react';
import Story from '../UserStoryPreview';
import  { FlatList } from 'react-native';
import storiesData from '../../data/stories';

import styles from './styles';

const renderItem = ({ item }) => (
  <Story story={item} /> 
);

const Stories = () => (
  <FlatList 
    data={storiesData}
    keyExtractor={({ name }) => name }
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={renderItem} 
    styles={styles.container} />
);

export default Stories;