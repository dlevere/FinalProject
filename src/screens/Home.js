import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

export default class Home extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Image 
        source={require('./logo.png')}/>
        <Text style={styles.title}>Welcome to your person IT Inventory App</Text>
        <Button
          color="red"
          title="Add an Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="View and Delete Items in Inventory"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'tan'
  },

  item: {
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
  },

  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    alignItems: 'center'
  },

  content: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#800020',
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  }
});