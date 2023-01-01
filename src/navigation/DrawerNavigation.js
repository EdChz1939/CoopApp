import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"
import AoInicio from "../screens/ahorros/Aoinicio";
import {UsuarioLogin, Settings, Wallet, Home, Notifications } from '../screens'
import { COLORS, ROUTES } from '../utils';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import {Dimensions, Image,StyleSheet, Text, TextInput, View, Touchable, TouchableOpacity, Button,SafeAreaView , StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get('window')

export default function DrawerNavigation() {
  return (
   <Drawer.Navigator 
    drawerContent={props => <CustomDrawer{...props} />}
    screenOptions={{
      drawerActiveBackgroundColor: '#2bb461',
      drawerActiveTintColor: COLORS.white
    }}
    >
    <Drawer.Screen name={ROUTES.HOME_DRAWER}      options={{ 
     headerTitle: (props) => (

      <View style= {{
        flex: 1,
        flexDirection: 'row',
        width:width/1.4,
        justifyContent: 'space-between',
          }}
      >
        <View style={{
            alignSelf: "flex-start", padding:13}}>
        <Text style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
                shadowColor: '#fff',
        }} >
            COBEE R.L.
      </Text>


        </View>

        <View       style={{
            alignSelf:'flex-end',
          }}>

    
            <Image 
          source={require('../assets/logoCBS.jpeg')}
          style={{
            width:50,
            height: 50,
          }}
        />
          
        </View>

      

      </View>
      
     )
    }} component={BottomTabNavigator}/>
    <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet}/>
    <Drawer.Screen name={ROUTES.NOTIFICATIONS_DRAWER} component={Notifications}/>
   </Drawer.Navigator>
  )
}



/*
   <Drawer.Navigator
      screenOptions={{
        headerShown:false,
      }}
   >

*/