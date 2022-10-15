import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {AoDetalle,AoInicio} from '../screens'
import {ROUTES} from '../utils'


const Stack = createStackNavigator();


export default function AhorrosNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={ROUTES.HOME_TAB_AO}>
    <Stack.Screen name={ROUTES.HOME_TAB_AO} component = {AoInicio}/>
    <Stack.Screen name={ROUTES.AO_DETALLE} component = {AoDetalle}
      options= {{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})