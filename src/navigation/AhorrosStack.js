import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import AoDetalle from '../screens/ahorros/AoDetalle';


const Stack = createStackNavigator();

export default function AhorrosStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Detalle"
            component={AoDetalle}
            options={{ title: "detalle ahorro" }}
          />
        </Stack.Navigator>
      );
    }
    