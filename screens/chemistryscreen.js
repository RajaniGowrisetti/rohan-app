import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class chemistryscreen extends Component{
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Text>Welcome to chemistry screen</Text>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        allignSelf:'center',
        marginTop:100
    },
});