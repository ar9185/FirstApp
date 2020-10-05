import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Entry from './src/components/Entry';
import styles from './src/styles/style';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
 class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

    </View>
  );
  }
}
const MainScreenNavigator = createAppContainer(createBottomTabNavigator({

Feed: {
    screen: HomeScreen,
    navigationOptions: {
        tabBarIcon: ({tintColor }) => (
          <FontAwesome name='windows' size={25} color={tintColor} />
        )
    }
},

Post: {
    screen: App,
    navigationOptions: {
        tabBarIcon: ({tintColor }) => (
          <FontAwesome name='apple' size={25} color={tintColor} />
        )
    }
}

}));

export default MainScreenNavigator;

