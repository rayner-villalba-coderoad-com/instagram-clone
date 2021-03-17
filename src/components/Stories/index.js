import React from 'react';
import Story from './../Story';
import  { FlatList } from 'react-native';

import styles from './styles';

const data = [
  {
    imageUri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Rayner'  
  }, {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
    name: 'Miguel'  
  }, {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVwoVQFA25t0MeNMzZe3qMojdL66IgFBu6Q&usqp=CAU',
    name: 'Villalba'  
  }, {
    imageUri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg',
    name: 'Mendieta 6'  
  }, {
    imageUri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg',
    name: 'Mendieta 7'  
  }, {
    imageUri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Rayner 2'  
  }, {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
    name: 'Miguel 2'  
  }, {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVwoVQFA25t0MeNMzZe3qMojdL66IgFBu6Q&usqp=CAU',
    name: 'Villalba 3'  
  }, {
    imageUri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg',
    name: 'Mendieta 4'  
  }, {
    imageUri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg',
    name: 'Mendieta 5'  
  }
];

const renderItem = ({ item }) => (
  <Story imageUri={item.imageUri} name={item.name} /> 
);

const Stories = () => (
  <FlatList 
    data={data}
    keyExtractor={({ name }) => name }
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={renderItem} 
    styles={styles.container} />  
//   <View>
//     <Story imageUri={data[0].imageUri} name={data[0].name} />
//     <Story imageUri={data[1].imageUri} name={data[1].name} />
//     <Story imageUri={data[2].imageUri} name={data[2].name} />
//     <Story imageUri={data[3].imageUri} name={data[3].name} />
//   </View>
);

export default Stories;