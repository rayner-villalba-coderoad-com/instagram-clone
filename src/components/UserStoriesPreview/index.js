import React, { useEffect, useState } from 'react';
import Story from '../UserStoryPreview';
import  { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listStorys } from '../../graphql/queries';
import storiesData from '../../data/stories';

import styles from './styles';

const renderItem = ({ item }) => (
  <Story story={item} /> 
);

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories(); 
  }, []);

  const fetchStories = async() => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (e) {

    }
  };

  return (
    <FlatList 
      data={stories}
      keyExtractor={({ name }) => name }
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem} 
      styles={styles.container} />
  );
}
  

export default Stories;