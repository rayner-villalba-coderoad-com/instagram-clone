import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: { // let's make it square the image 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width  
    //width: '100%',
    //height: 500

  }
});

export default styles;