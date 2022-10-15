import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import Auth from './src/components/Login/Auth';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/screens/AppNav';
import AuthNavigator from './src/navigation/AuthNavigator';



export default function App(){

    return(
        <NavigationContainer>
            <AuthProvider>
            <AuthNavigator/>
            </AuthProvider>
        </NavigationContainer>
    )
}


