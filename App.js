import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GateSearchScreen from './src/screens/GateSearchScreen';
import ShopSearchScreen from './src/screens/ShopSearchScreen';
import FlightSearchScreen from './src/screens/FlightSearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        >
          <Tab.Screen name="Gates" component={GateSearchScreen} />
          <Tab.Screen name="Shops" component={ShopSearchScreen} />
          <Tab.Screen name="Flights" component={FlightSearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
