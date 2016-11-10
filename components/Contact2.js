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

const NOMBRE = "UID123_object"

class Contact2 extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      phone:"",
      email:"",
      errors:[],
    }

  }

  async storeContact(contact){
    try {
      await AsyncStorage.setItem(NOMBRE, JSON.stringify(contact));
      this.getContact();
    } catch (error) {
      alert("somenthing went wrong");
    }
  }

  async getContact(){
    try {
      let contact = await AsyncStorage.getItem(NOMBRE);
      alert("contacto es:"+ contact);
    } catch (error) {
      alert("somenthing went wrong");
    }
  }

  async anadirPressed(){
    try {
      this.storeContact(this.state.name);
    } catch (error) {
      alert("somenthing went wrong");
    }
  }

  render() {

    const state = this.props.navigationState;
    const children = state.children;

    return (
      <View >
            <Text style={{marginTop:50,marginLeft:50,width: 200,height: 50,color:'black'}}>Nombre</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10,marginTop:0}}
                onChangeText={ (val) => this.setState({name:val})}
                />
            <Text style={{marginLeft:50,width: 200,height: 50,color:'black'}}>Telefono</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10}}
                onChangeText={ (val) => this.setState({phone:val})}
                />
            <Text style={{marginLeft:50,width: 200,height: 50,color:'black'}}>Correo Electronico</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:50}}
                nChangeText={ (val) => this.setState({email:val})}
                />
                <FormButton
                isDisabled={false}
                onPress={this.anadirPressed.bind(this)}
                buttonText={'Anadir'}
                color={'#55dc5b'}
              />
      </View>
    );
  }
}



export default Contact2;
