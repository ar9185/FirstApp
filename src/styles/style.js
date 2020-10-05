import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
      width: Dimensions.get('window').width,
      margin:30,
      borderWidth: 10,
      borderColor: '#f00',
  },

});



export default styles;