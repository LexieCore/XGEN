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







const Contact = () => (
  <View >

        <Text style={{marginTop:50,marginLeft:50,width: 200,height: 50,color:'black'}}>Nombre</Text>
        <TextInput
            maxLength={15}
            multiline = {true}
            style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10,marginTop:0}}
            />
        <Text style={{marginLeft:50,width: 200,height: 50,color:'black'}}>Telefono</Text>
        <TextInput
            maxLength={15}
            multiline = {true}
            style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10}}
            />
        <Text style={{marginLeft:50,width: 200,height: 50,color:'black'}}>Correo Electronico</Text>
        <TextInput
            maxLength={15}
            multiline = {true}
            style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:50}}
            />
            <FormButton
            isDisabled={false}
            onPress={() => alert('Right button')}
            buttonText={'Anadir'}
            color={'#55dc5b'}
          />
  </View>
);

export default Contact;
