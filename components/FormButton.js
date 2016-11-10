/**
* # FormButton.js
*
* Display a button that responds to onPress and is colored appropriately
*/
'use strict';
/**
 * ## Imports
 *
 * React
 */
import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

/**
 * The platform neutral button
 */
import Button from 'apsl-react-native-button';

/**
 * ## Styles
 */
let styles = StyleSheet.create({
  signin: {
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor:  '#FF3366',
  }
});

export default class FormButton extends React.Component{
  render() {
    return (
      <View style={[styles.signin]}>
        <Button
          isLoading={this.props.isLoading}
          textStyle={{color:'white',fontSize:24}}
          style={styles.button,{backgroundColor:this.props.color,borderColor:this.props.color}}
          isDisabled={this.props.isDisabled}
          onPress={this.props.onPress}
        >
          {this.props.buttonText}
        </Button>
      </View>
    );
  }
}
