
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Contact from './Contact';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});





class Row extends React.Component {

  constructor(props) {
    super(props);

  };

  render() {
    return (
      <View  style={styles.container} >

        <Button onPress={() =>  Actions.tab4(this.props) }>
        <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
        <Text style={styles.text}>
          {`${this.props.name.first} ${this.props.name.last}`}
        </Text>
        </Button>

      </View>
    );
  }

};



export default Row;
