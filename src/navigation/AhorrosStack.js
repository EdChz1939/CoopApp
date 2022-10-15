import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import AoDetalle from '../screens/ahorros/AoDetalle';
import AoInicio from '../screens/ahorros/Aoinicio';
import {screen} from '../utils'
import DrawerNavigation from '../navigation/DrawerNavigation'

const Stack = createStackNavigator();

export default function AhorrosStack() {
    return (
        <Stack.Navigator screenOptions={{}} >
          <Stack.Screen
            name= {screen.Ahorros.Ahorros}
            component={AoInicio}
            options={{ title: "detalle ahorro" }}
          />
          <Stack.Screen
            name= {screen.Ahorros.AoDetalle}
            component={AoDetalle}
            options={{  tabBarShowLabel: false, title: "detalle ahorro" }}
          />
            <Stack.Screen
            name= 'as'
            component={DrawerNavigation}
            options={{ title: "detalle ahorro" }}
          />
        </Stack.Navigator>
      );
    }
    