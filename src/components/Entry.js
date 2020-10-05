import React from 'react';

import styles from '../styles/style';
import { StyleSheet, Text, View } from 'react-native';

class Entry extends React.Component{
  render(){
  return (
    <View style={styles.border}>
      <Text>{this.props.item.title}</Text>
    </View>
  );
  }
}


export default Entry;