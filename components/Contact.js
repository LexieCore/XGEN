import React from 'react';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { View, Text, StyleSheet, TextInput, AsyncStorage} from 'react-native';
import Button from "react-native-button";
import FormButton from './FormButton';





let UID123_object = {
 name: 'Chris',
 age: 30,
 traits: {hair: 'brown', eyes: 'brown'},
};

// need only define what will be added or updated
let UID123_delta = {
 age: 31,
 traits: {eyes: 'blue', shoe_size: 10}
};

AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(UID123_object), () => {
  AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
    AsyncStorage.getItem('UID123', (err, result) => {
      console.log(result);
      // => {'name':'Chris','age':31,'traits':{'shoe_size':10,'hair':'brown','eyes':'blue'}}
    });
  });
});


const Contact = (props) => (

  <View >

        <Text style={{marginTop:50,marginLeft:50,width: 200,height: 50,color:'black',fontWeight:'bold'}}>Nombre</Text>
        <Text style={{marginTop:5,marginLeft:50,width: 200,height: 50,color:'black'}}>{`${props.name.first} ${props.name.last}`}</Text>

        <Text style={{marginLeft:50,width: 200,height: 50,color:'black',fontWeight:'bold'}}>Telefono</Text>
        <Text style={{marginTop:5,marginLeft:50,width: 200,height: 50,color:'black'}}>{`${props.phone}`}</Text>

        <Text style={{marginLeft:50,width: 200,height: 50,color:'black',fontWeight:'bold'}}>Correo Electronico</Text>
        <Text style={{marginTop:5,marginLeft:50,width: 200,height: 50,color:'black'}}>{`${props.email}`}</Text>

  </View>
);

export default Contact;
