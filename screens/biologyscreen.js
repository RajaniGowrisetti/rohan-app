import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SoundButton from '../components/SoundButton'

export default class bioligyscreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Biology Screen</Text>
        <SoundButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
