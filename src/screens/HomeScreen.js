import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import styles from '../styles/style';
import Entry from '../components/Entry';



class HomeScreen extends React.Component{

constructor() {
super();
this.state = {
    entries: [],
};
}
componentDidMount() {

fetch('https://murmuring-bastion-31969.herokuapp.com/entries')

    .then(response => response.json())

    .then(jsonResponse => this.setState({ entries: jsonResponse }));

}


  render(){
  return (
    <View style={styles.container}>
      <FlatList
      data={this.state.entries}
      renderItem={({item}) => <Entry item={item} />}
      keyExtractor={item => item['_id']}
      />

    </View>
  );
  }
}
export default HomeScreen;