import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LoginForm from './LoginForm';

export default function Auth(){
    return(
        <View style={styles.view}>
            <Image style={styles.logo} source = {require('../../assets/2.png')}/>
            <LoginForm/>
          
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems:'center',
    },
    logo:{
        width: '63%',
        height: 240,
        marginTop:50,
        marginBottom: 50,
    }
});