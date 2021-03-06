/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Splash extends Component {
  componentDidMount(){
    setTimeout(() => this.nextRoute(), 2000)

  }

  nextRoute(){
    this.props.navigator.push({
      id:'allStories'
    })
  }
  render() {
    return (
      <Image style={styles.container} resizeMode="contain" source={require('../images/background3.png')} >
       <Image source={require('../images/logo.png')} style={{height:150, width:150}} resizeMode="contain" />
      
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('games7', () => games7);
