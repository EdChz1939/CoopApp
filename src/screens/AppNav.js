import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation/Navigation';

export default function AppNav() {
  return (
         <NavigationContainer>
        <Navigation/>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({})