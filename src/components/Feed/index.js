import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const data = [{
  id: 1,
  user: {
    imageUri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Rayner'
  },
  imageUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  caption: 'Beatiful Yoda #instragram',
  likesCount: 1234,
  postedAt: '5 minutes ago'
}, {
    id: 2,
    user: {
      imageUri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'Rayner'
    },
    imageUri: 'https://i.redd.it/tjg86bw6bou21.jpg',
    caption: 'Tiger #instragram',
    likesCount: 1234,
    postedAt: '5 minutes ago'
}, {
    id: 3,
    user: {
      imageUri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'Rayner'
    },
    imageUri: 'https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg',
    caption: 'Kid at night #instragram',
    likesCount: 1234,
    postedAt: '5 minutes ago'
}];

const Feed = () => (
  <FlatList 
    data={data}
    keyExtractor={({id}) => id.toString()}
    renderItem={({item}) => <Post post={item} />}
    ListHeaderComponent={Stories}
  />  
);

export default Feed;