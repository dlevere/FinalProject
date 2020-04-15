import React, { useState, Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Picker,
  Alert
} from 'react-native';

import { db } from '../config';


let addItem = item => {
  db.ref('/items').push({
    name: item
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    asset: ''
  }

  state = {
    serial: ''
  }

  updateAsset = (asset) => {
    this.setState({ asset: asset })
 }

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert('Item saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Asset Type</Text>
        <Picker
        style={{marginBottom: 50, marginLeft: 20}}
          selectedValue={this.state.asset}  
          onValueChange={this.updateAsset}>  
        <Picker.Item label="PC" value= "PC" />  
        <Picker.Item label="Laptop" value="Laptop" />  
        <Picker.Item label="Printer" value="Printer" />  
        <Picker.Item label="Monitor" value="Monitor" />  
        <Picker.Item label="Tablet" value="Tablet" />  
        <Picker.Item label="Phone" value="Phone" /> 
        </Picker>
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
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});