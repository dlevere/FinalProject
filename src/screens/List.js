import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, Alert, Picker} from 'react-native';

import { db, db1 } from '../config';


export default class List extends Component {


state = {
  // Holds item info
  assetList: [],
  // Holds asset ID's
  keyList: [],
  // Variable used to change listview
  filter: '',
  // Hilds asset ID value
  key: ''
}

// Updates the filter variable
updateFilter = (filter) => {
  this.setState({ filter: filter })
}



// Used to present a view of the items in list
_renderItem = ({item}) => (
  <TouchableOpacity onPress={() => Alert.alert(
    'Info',
    'Serial#: ' + item.serial + "\nAsset: " + item.asset + "\nModel: " + item.model,
    [
      {text: 'Delete Item', onPress: () => this.func(item.serial)},
      {text: 'Exit', onPress: () => console.warn('Exit Pressed')},
    ],
    { cancelable: false }
  )}>
  <Text style={styles.content}>Serial#: {item.serial}</Text> 
  </TouchableOpacity>
);

_renderItem2 = ({item}) => (
  <TouchableOpacity onPress={() => Alert.alert(
    'Info',
    'Serial#: ' + item.serial + "\nAsset: " + item.asset + "\nModel: " + item.model,
    [
      {text: 'Delete Item', onPress: () => this.func(item.serial)},
      {text: 'Exit', onPress: () => console.warn('Exit Pressed')},
    ],
    { cancelable: false }
  )}>
  <Text style={styles.content}>Asset Model: {item.model}</Text> 
  </TouchableOpacity>
);

_renderItem3 = ({item} ) => (
  <TouchableOpacity onPress={() => Alert.alert(
    'Info',
    'Serial#: ' + item.serial + "\nAsset: " + item.asset + "\nModel: " + item.model,
    [
      {text: 'Delete Item', onPress: () => this.func(item.serial)},
      {text: 'Exit', onPress: () => console.warn('Exit Pressed')},
    ],
    { cancelable: false }
  )}>
  <Text style={styles.content}>Asset Type: {item.asset}</Text> 
  </TouchableOpacity>
);

// Attempts to grap asset key based on the serial number and delete the asset
func(item){
  this.setState({key: db.ref("/Equipment").child(item).push().key})
  console.log(this.state.key);
  db.ref("/Equipment/" + this.state.key).remove();
  console.log("/Equipment/" + this.state.key);
}

// Pulls the data from database and stores it into arrays
componentDidMount() {
  db.ref('/Equipment').on('value', (snapshot) => {
    let data = snapshot.val();
    let assetList = Object.values(data);
    let keyList = Object.keys(data);
    console.log(keyList)
    this.setState({assetList});
    this.setState({keyList});
  });
}


//Provides physical view of the asset list
  render() {
    if(this.state.filter == "model"){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Asset Inventory</Text>
        <Text>View By</Text>
        <Picker
        style={{marginBottom: 20, marginLeft: 20, width: 200, alignSelf: 'center'}}
          selectedValue={this.state.filter}  
          onValueChange={this.updateFilter}>  
        <Picker.Item label="Serial" value= "serial" />  
        <Picker.Item label="Asset Type" value="asset" />  
        <Picker.Item label="Asset Model" value="model" />  
        </Picker>
          {
              this.state.assetList.length > 0
              ? <FlatList
              data={this.state.assetList}
              renderItem={this._renderItem2}
              keyExtractor={(data, index) => index}
              />
              : <Text>No items</Text>
          }
      </View>
  )
        }

  if(this.state.filter == "asset"){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asset Inventory</Text>
      <Text>View By</Text>
      <Picker
      style={{marginBottom: 20, marginLeft: 20, width: 200, alignSelf: 'center'}}
        selectedValue={this.state.filter}  
        onValueChange={this.updateFilter}>  
      <Picker.Item label="Serial" value= "serial" />  
      <Picker.Item label="Asset Type" value="asset" />  
      <Picker.Item label="Asset Model" value="model" />  
      </Picker>
        {
            this.state.assetList.length > 0
            ? <FlatList
            data={this.state.assetList}
            renderItem={this._renderItem3}
            keyExtractor={(item, index) => index}
            />
            : <Text>No items</Text>
        }
    </View>
)
      }

      else{
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Asset Inventory</Text>
            <Text>View By</Text>
            <Picker
            style={{marginBottom: 20, marginLeft: 20, width: 200, alignSelf: 'center'}}
              selectedValue={this.state.filter}  
              onValueChange={this.updateFilter}>  
            <Picker.Item label="Serial" value= "serial" />  
            <Picker.Item label="Asset Type" value="asset" />  
            <Picker.Item label="Asset Model" value="model" />  
            </Picker>
              {
                  this.state.assetList.length > 0
                  ? <FlatList
                  data={this.state.assetList}
                  extraData={this.state.keyList}
                  renderItem={this._renderItem}
                  />
                  : <Text>No items</Text>
              }
          </View>
      )
            }

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
    marginBottom: 5,
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
