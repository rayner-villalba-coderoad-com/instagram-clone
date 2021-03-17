import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  left: {
    flexDirection: 'row', 
  },
  right: {
    marginRight: 10
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#4f4f4f'
  }
});

export default styles;