import React, { useState, Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Picker,
  Alert,
  TextInput,
  ActivityIndicator, 
  Linking, 
  FlatList, 
  TouchableOpacity
} from 'react-native';

export default class List extends Component{

constructor(props)
{
  super(props);
  this.state={
    isLoading: true,
    dataSource: null,
  }
}

// Grabs the data from the website
componentDidMount(){
  return fetch('https://finalproject-d3ed6.firebaseio.com/items.json')
    .then ((response) => response.json())
    .then ((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      })
    })

    .catch((error) => {
      console.log(error)
    });
}

_renderItem = ({item}) => (
  <Text>
  {item.asset}
  {item.model}
  {item.serial}
  </Text>    
);

render() {
  if(this.state.isLoading){

    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  } 
  else {
    return(
      <View>
        <Text style={styles.title}>Items Within Inventory</Text>
        <FlatList
        data={this.state.dataSource}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
        />
      </View>
    );
  }  
}

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#D2B48C'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  }
});