import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {CrDetalle, CrInicio} from '../screens'
import {ROUTES} from '../utils'

const Stack = createStackNavigator();

export default function CreditosNavigator() {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={ROUTES.HOME_TAB_CR}>
            <Stack.Screen name={ROUTES.HOME_TAB_CR} component = {CrInicio}/>
            <Stack.Screen name={ROUTES.CR_DETALLE} component = {CrDetalle}
              options= {{headerShown:false}}/>
        </Stack.Navigator>
      );
    }
  


const styles = StyleSheet.create({})