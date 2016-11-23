import React from 'react';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { View, Text, StyleSheet, TextInput, AsyncStorage} from 'react-native';
import Button from "react-native-button";
import FormButton from './FormButton';

class Contact2 extends React.Component {

  constructor() {
    super();

    this.state = {
      name: {
        first:"",
        last:""
      },
      email:"",
      phone:"",
      picture:{
        large: "https://randomuser.me/api/portraits/men/47.jpg",
      },
    }
  }


  async storeContact(contact){
    try {

      let contacts = await AsyncStorage.getItem('cs');
      contact = JSON.stringify(contact);
      contacts = contacts.concat(",",contact);
      await AsyncStorage.setItem('cs',contacts);
      this.getContact();
      } catch (error) {
      await AsyncStorage.setItem('cs',contact);
      alert("somenthing went wrong A");
    }
  }

  async getContact(){
    try {
      let contacts = await AsyncStorage.getItem('cs');
      alert("contacto es:"+ contacts);
    } catch (error) {
      alert("somenthing went wrong2");
    }
  }

  async anadirPressed(){
    try {
      this.storeContact(this.state);
      alert("succeed1");
    } catch (error) {
      alert("somenthing went wrong");
    }
  }

  render() {

    const state = this.props.navigationState;
    const children = state.children;



    return (
      <View >
            <Text style={{marginTop:50,marginLeft:50,width: 200,height: 20,color:'black'}}>Nombre</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10,marginTop:0}}
                onChangeText={ (val) => {this.state.name.first=val}}
                />
            <Text style={{marginLeft:50,width: 200,height: 20,color:'black'}}>Apellido</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10,marginTop:0}}
                onChangeText={ (val) => {this.state.name.last=val}}
                />
            <Text style={{marginLeft:50,width: 200,height: 20,color:'black'}}>Telefono</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:10}}
                onChangeText={ (val) => this.setState({phone:val})}
                />
            <Text style={{marginLeft:50,width: 200,height: 20,color:'black'}}>Correo Electronico</Text>
            <TextInput
                maxLength={15}
                multiline = {true}
                style={{marginLeft:50,width: 200,height: 50,color:'black',marginBottom:50}}
                onChangeText={ (val) => this.setState({email:val})}
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
