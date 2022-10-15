import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"
import AoInicio from "../screens/ahorros/Aoinicio";
import {UsuarioLogin, Settings, Wallet, Home, Notifications } from '../screens'
import { COLORS, ROUTES } from '../utils';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
   <Drawer.Navigator 
    drawerContent={props => <CustomDrawer{...props} />}
    screenOptions={{
      drawerActiveBackgroundColor: '#2bb461',
      drawerActiveTintColor: COLORS.white
    }}
    >
    <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator}/>
    
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