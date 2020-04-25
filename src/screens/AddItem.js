import React, { useState, Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Picker,
  Alert,
  TextInput
} from 'react-native';

import { db } from '../config';


// Adds items into database
let addItem = (asset, serial, model) => {
  db.ref('/Equipment').push({
    asset: asset,
    serial: serial,
    model: model
  });
};

export default class AddItem extends Component{
  state = { 
    name: '',
    // Holds asset type
    asset: 'PC',
    // Holds serial number
    serial: '',
    // Holds asset model
    model: ''
  }

  // Updates asset type
  updateAsset = (asset) => {
    this.setState({ asset: asset })
 }

 // adds items to database
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.asset, this.state.serial, this.state.model);
    Alert.alert('Item saved successfully');
  };

  // Renders physical view of add item form
  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>Asset Type</Text>
        <Picker
        style={{marginBottom: 20, marginLeft: 20, width: 200, alignSelf: 'center'}}
          selectedValue={this.state.asset}  
          onValueChange={this.updateAsset}>  
        <Picker.Item label="PC" value= "PC" />  
        <Picker.Item label="Laptop" value="Laptop" />  
        <Picker.Item label="Printer" value="Printer" />  
        <Picker.Item label="Monitor" value="Monitor" />  
        <Picker.Item label="Tablet" value="Tablet" />  
        <Picker.Item label="Phone" value="Phone" /> 
        </Picker>

        <Text style={styles.title}>Asset Model</Text>
        <TextInput
        style={styles.itemInput}
        label='Model'
        value={this.state.model}
        onChangeText={model => this.setState({ model })}
        />

        <Text style={styles.title}>Serial Number</Text>
        <TextInput
        style={styles.itemInput}
        label='Serial'
        value={this.state.serial}
        onChangeText={serial => this.setState({ serial })}
        />
        
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
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
  },
  itemInput: {
    height: 40,
    padding: 4,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#800020',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    fontWeight: "bold"
  }
});