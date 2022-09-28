import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Aoinicio from '../screens/ahorros/Aoinicio';
import UsuarioLogin from '../screens/Account/UsuarioLogin';
import LoginForm from '../components/Login/LoginForm';
import AoDetalle from '../screens/ahorros/AoDetalle';
import AhorrosStack from './AhorrosStack';
import {screen} from '../utils';
import { AuthContext } from '../context/AuthContext';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function Navigation() {

  const {userInfo} = useContext(AuthContext);
  
  return (
    <Tab.Navigator  
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        backgroundColor: '#88C437',
      }
    }}>
      {userInfo.accessToken? (
        <>
      <Tab.Screen name= {screen.Ahorros.tab} component={AhorrosStack} options={{headerShown: false, tabBarIcon:({focused}) => (
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

       <Tab.Screen name="credito" component={AoDetalle} options={{headerShown: false, tabBarIcon:({focused}) => (
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

        <Tab.Screen name="creditos" component={Aoinicio}options={{headerShown: false, tabBarIcon:({focused}) => (
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

       </>
      ) : 
      <Tab.Screen options={{
        tabBarStyle: {  display: 'none' }, 
        headerShown: false
        }} 
        name="Exit"
        component={UsuarioLogin}  />
  
  
      }

      
      
  


   
    </Tab.Navigator>
  )
}

/*

*/

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width: 0 ,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})