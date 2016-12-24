/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { HomePage } from './pages/HomePage';



export default class snapRest extends Component {
  render() {

    return (
        <HomePage/>
    );
  }
}

AppRegistry.registerComponent('snapRest', () => snapRest);
