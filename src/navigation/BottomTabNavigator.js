import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { ROUTES } from '../utils'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Wallet, Notifications,Settings, AoInicio} from '../screens'
import CreditosNavigator from './CreditosNavigator'
import AhorrosNavigator from './AhorrosNavigator'

const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return(
        <Tab.Navigator  
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:{
            backgroundColor: '#2bb461',
          }
        }}>



        <Tab.Screen name={ROUTES.AO_NAVIGAOTR} component={AhorrosNavigator} options={{headerShown: false, tabBarIcon:({focused}) => (
        <View style= {{alignItems: 'center', justifyContent:'center', top:4}}>
          <Image 
          source={require('../../src/assets/3.png')}
          resizeMode = 'contain'
          style={{
            width:25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#ffffff'
          }}
          />
          <Text style={{ color : focused ? '#e32f45' : '#ffffff', fontSize: 12}}>
            AHORROS
          </Text>
        </View>
      )
       }} />

       <Tab.Screen name={ROUTES.CR_NAVIGATOR} component={CreditosNavigator} options={{headerShown: false, tabBarIcon:({focused}) => (
        <View style= {{alignItems: 'center', justifyContent:'center', top:4}}>
          <Image 
          source={require('../../src/assets/4.png')}
          resizeMode = "contain"
          style={{
            width:25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#ffffff'
          }}
          />
          <Text style={{ color : focused ? '#e32f45' : '#ffffff', fontSize: 12}}>
            DETALLE
          </Text>
        </View>
      )
       }} />

        <Tab.Screen  name={ROUTES.WALLET} component={Wallet} options={{headerShown: false, tabBarIcon:({focused}) => (
        <View style= {{alignItems: 'center', justifyContent:'center', top:4}}>
          <Image 
          source={require('../../src/assets/5.png')}
          resizeMode = "contain"
          style={{
            width:25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#ffffff'
          }}
          />
          <Text style={{ color : focused ? '#e32f45' : '#ffffff', fontSize: 12}}>
            APORTES
          </Text>
        </View>
      )
       }} />

































    </Tab.Navigator>

    );
}
export default  BottomTabNavigator;